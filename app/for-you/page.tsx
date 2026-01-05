export default function ForYou() {
  return (
    <section className="for-you">
        <h2 className="for-you__title">For You</h2>
        <div className="for-you__content">
            <p className="for-you__description">
                Discover personalized book summaries tailored to your interests and reading habits. Our "For You" section curates content based on your preferences, ensuring you always have access to the most relevant and engaging summaries.   
            </p>
            <div className="for-you__summaries">
                {/* Example summary cards */}
                <div className="for-you__summary-card">
                    <h3 className="for-you__summary-title">The Power of Habit</h3>
                    <p className="for-you__summary-author">by Charles Duhigg</p>
                    <p className="for-you__summary-description">
                        Explore the science behind habit formation and how to harness it for personal and professional success.
                    </p>

                </div>
                <div className="for-you__summary-card">
                    <h3 className="for-you__summary-title">Atomic Habits</h3>
                    <p className="for-you__summary-author">by James Clear</p>
                    <p className="for-you__summary-description">
                        Learn practical strategies for building good habits and breaking bad ones to achieve remarkable results.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
