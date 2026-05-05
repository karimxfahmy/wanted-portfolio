import "./Profile.css";

const PHOTO_URL =
  "https://framerusercontent.com/images/XKOSY9dKDoDwoJ2VPoBONI4pQPo.jpg?width=720&height=633";

export default function Profile() {
  return (
    <section className="section section--profile">
      <div className="profile-photo-wrap">
        <div className="profile-photo">
          <img src={PHOTO_URL} alt="Karim Fahmy" loading="lazy" />
        </div>
        <span className="profile-badge">Available for work</span>
      </div>

      <div className="profile-name-block">
        <h2 className="profile-name">Karim Fahmy</h2>
        <p className="profile-role">Cinematographer</p>
      </div>
    </section>
  );
}
