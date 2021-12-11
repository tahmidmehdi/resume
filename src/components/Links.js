import './Links.css';

function Links() {
  const linkedin = "/linkedin.png";
  const github = "/github.png";
  const researchgate = "/ResearchGate.png";
  return (
    <div className="Links">
    <a href="https://www.linkedin.com/in/tahmidmehdi/"><img src={linkedin} alt="linkedin" /></a>
    <a href="https://github.com/tahmidmehdi"><img src={github} alt="github" /></a>
    <a href="https://www.researchgate.net/profile/Tahmid-Mehdi/research"><img src={researchgate} alt="researchgate" /></a>
    </div>
  );
}

export default Links;