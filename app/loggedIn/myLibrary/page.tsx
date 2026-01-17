export default function MyLibrary() {
  return (
    <section className="my-library">
        <h2 className="my-library__title">My Library</h2>
        <div className="my-library__content">
            <p className="my-library__description">
                Welcome to your personal library! Here, you can access all the book summaries you've saved for later reading. Organize your collection, revisit your favorite summaries, and continue your learning journey at your own pace.   
            </p>    
            <div className="my-library__summaries">
                {/* Example saved summary cards */}
                <div className="my-library__summary-card">
                    <h3 className="my-library__summary-title">Deep Work</h3>
                    <p className="my-library__summary-author">by Cal Newport</p>
                    <p className="my-library__summary-description">
                        Understand the importance of focused work and learn strategies to minimize distractions in a world full of interruptions.
                    </p>
                </div>
                <div className="my-library__summary-card">
                    <h3 className="my-library__summary-title">Thinking, Fast and Slow</h3>
                    <p className="my-library__summary-author">by Daniel Kahneman</p> 
                    <p className="my-library__summary-description">
                        Explore the two systems that drive the way we think and make decisions, and how to leverage this understanding in everyday life.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}