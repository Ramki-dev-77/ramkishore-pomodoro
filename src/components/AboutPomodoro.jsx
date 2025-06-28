
function About(){
    return(
        <div className="About-Container">
            <div className="About-Heading">
                <h2>About</h2>
            </div>
            <div className="About-Content">
                <h3>
                    <ul>
                        <li>The <strong style={{color:'black'}}>Pomodoro Technique</strong> is a popular time management method that uses 25-minute.</li>
                        <li>In today’s distracted world, focusing for 25 minutes straight can be difficult.</li>
                        <li><strong style={{color:'black'}}>Mini Pomodoro</strong> offers a more approachable alternative: a <strong style={{color:'black'}}>12.5 </strong>-minute focus session followed by a <strong style={{color:'black'}}>3-minute </strong>break.</li>
                        <li>During the break time, users can relax by <strong style={{color:'black'}}>listening to a song</strong> they selected before starting the focus session which present at left.</li>
                        <li>This helps build focus gradually, reduce burnout, and make deep work more accessible.</li>
                    </ul>
                </h3>
            </div>
        </div>
    );
}
export default About;