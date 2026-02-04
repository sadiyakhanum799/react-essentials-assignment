import Header from './Header';
import Avatar from './Avatar';
import PersonalInfo  from './PersonalInfo';
import Bio from './bio';
import './PortfolioCard.css';
function PortfolioCard() {
      return (
            <div className="portfolio-card">
                  <Header/>
                  <Avatar/>
                  <PersonalInfo/>
                  <Bio/>
            </div>
      );
}
export default PortfolioCard;