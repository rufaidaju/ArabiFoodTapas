import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div>
        <p>
          <a
            href="https://www.hackyourfuture.dk/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            HackYourFuture{" "}
          </a>
          <span> &copy; </span> 2020 All rights reserved. Partnered with{" "}
          <span>
            <a
              href="https://www.finklusiv.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Finklusiv.dk{" "}
            </a>
          </span>{" "}
        </p>
      </div>

      <div>
        <p>
          Designed By developed by{" "}
          <span>
            <a
              href="https://myshuker.github.io/myPortfolio/#/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Mohammad Alshoker{" "}
            </a>
          </span>
          and{" "}
          <span>
            <a
              href="https://rufaidaju.github.io/Rufaida-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "} 
              Rufaida Jumaa{" "}
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
