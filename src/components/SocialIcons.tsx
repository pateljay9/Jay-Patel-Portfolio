import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
  // Calculate years and months since joining date
  const joiningDate = new Date('2016-11-15');
  const today = new Date();
  const totalMonths =
    (today.getFullYear() - joiningDate.getFullYear()) * 12 +
    (today.getMonth() - joiningDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const handleDownloadResume = async () => {
    try {
      const fileName = `jay_patel_${years}yrs_${months}mnths.pdf`;
      const response = await fetch('/models/resume.pdf');
      if (!response.ok) throw new Error('Failed to fetch resume');
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading resume:', error);
      const link = document.createElement('a');
      link.href = '/models/resume.pdf';
      link.download = `jay_patel_${years}yrs_${months}mnths.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/pateljay9" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/pateljay5290" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/pateljay_9" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/pateljay_9" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <button className="resume-button" type="button" onClick={handleDownloadResume}>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </button>
    </div>
  );
};

export default SocialIcons;
