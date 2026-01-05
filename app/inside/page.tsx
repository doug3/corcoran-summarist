export default function Inside() {
    return (
        <>
        <section className="inside">
            <h2 className="inside__title">Inside Book</h2>
            <div className="inside__content">
                <p className="inside__description">
                    Dive deep into the core concepts and key takeaways of popular books with our "Inside Book" section. Each summary provides a comprehensive overview, highlighting the most important ideas and insights to help you grasp the essence of the book quickly and effectively.
                </p>
                <div className="inside__summaries">
                    {/* Example inside book summaries */}   
                    <div className="inside__summary-card">
                        <h3 className="inside__summary-title">Deep Work</h3>
                        <p className="inside__summary-author">by Cal Newport</p>
                        <p className="inside__summary-description">
                            Understand the principles of deep work and how to cultivate focus in a distracted world.
                        </p>
                    </div>
                    <div className="inside__summary-card">
                        <h3 className="inside__summary-title">Thinking, Fast and Slow</h3>
                        <p className="inside__summary-author">by Daniel Kahneman</p>
                        <p className="inside__summary-description">
                            Explore the dual systems of thought and how they influence our decisions and behaviors.
                        </p> 
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}