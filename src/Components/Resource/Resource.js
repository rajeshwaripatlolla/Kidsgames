import React from "react";
import "./ResourcePage.css";

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <header className="resources-header">
        <h1>Game Resources</h1>
        <p>Discover helpful guides, tips, and videos to enhance your gaming experience!</p>
      </header>

      <section className="resources-section">
        <h2>Learn & Play with These Resources</h2>
        
        {/* Video Resources */}
        <div className="resource">
          <h3>How to Play Learning Adventure</h3>
          <p>
            Dive into a world of puzzles and challenges designed to improve math, reading, and logic skills. 
            This game encourages children to solve problems step by step. Parents can guide their children through 
            tricky puzzles and discuss solutions together!
          </p>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Learning Adventure Tutorial"
            className="resource-video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="resource">
          <h3>Mastering Colors and Shapes</h3>
          <p>
            This interactive game teaches kids how to identify and match colors and shapes. It's perfect for 
            preschoolers! Watch the video below for a quick guide on making the most of this game.
          </p>
          <iframe
            src="https://www.youtube.com/embed/OmyfYw-beNQ?si=Bu3ohly0__Mw0hhw"
            title="Colors and Shapes Tutorial"
            className="resource-video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="resource">
          <h3>Quiz Game Tips</h3>
          <p>
            Encourage children to think fast and answer questions accurately in this fun quiz game. It's great for 
            building general knowledge and quick reflexes. Check out this tutorial for strategies to ace the game.
          </p>
          <iframe  src="https://www.youtube.com/embed/AMj2ncsPl8w?si=e_DpTCcenR6r0Sr-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="resource-video"></iframe>
        </div>

        <div className="resource">
          <h3>Math Challenge Guidance</h3>
          <p>
            Math Challenge helps kids practice addition, subtraction, and problem-solving skills in an engaging way. 
            This resource provides tips for solving problems faster and better.
          </p>
          <iframe  src="https://www.youtube.com/embed/VlE32X-Qefs?si=XgeVFs6r4pNdYHO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="resource-video"></iframe>
        </div>

        {/* PDF Resources Section */}
        <div className="resources-pdf-section">
          <h3>Downloadable Game Guides</h3>
          
          <div className="pdf-resource">
            <h4>Complete Guide to Game Strategies</h4>
            <p>
              Learn the best strategies for mastering each game. This guide covers tips for beginners to advanced players.
            </p>
            <a href="https://en.wikipedia.org/wiki/Go_(game)" download className="download-link">
              Download PDF
            </a>
          </div>

          <div className="pdf-resource">
            <h4>Understanding Game Mechanics</h4>
            <p>
              A comprehensive guide explaining the mechanics behind various games, including rules and scoring systems.
            </p>
            <a href="https://www.juegostudio.com/blog/the-ultimate-beginners-guide-to-game-mechanics#:~:text=Game%20mechanics%20are%20the%20rules,resource%20management%20systems%2C%20and%20more." download className="download-link">
              Download PDF
            </a>
          </div>

          <div className="pdf-resource">
            <h4>Top 10 Tips for New Players</h4>
            <p>
              A great starting point for new players looking to get ahead in the games. These tips will help boost your confidence and skills.
            </p>
            <a href="https://www.reddit.com/r/DungeonWorld/comments/1635qhn/tips_for_gming_for_young_kids/?rdt=57594" download className="download-link">
              Download PDF
            </a>
          </div>

          <div className="pdf-resource">
            <h4>Game Rules and Regulations</h4>
            <p>
              Make sure you know the rules! Download this PDF to get a clear understanding of the game's guidelines and regulations.
            </p>
            <a href="https://childmind.org/article/making-games-work-for-kids-of-all-ages-and-needs/" download className="download-link">
              Download PDF
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ResourcesPage;
