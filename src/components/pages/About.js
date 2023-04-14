import profile from '../../assets/Profile_Picture.jpg';
import './About.css';

export default function About() {
  return (
    <section class="about">
    <img src={profile} alt="profile"></img>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Harum repudiandae rerum adipisci inventore voluptate voluptates maiores necessitatibus distinctio recusandae! 
        Totam ea cupiditate rerum. Beatae quam qui, in rem sunt blanditiis.
    </p>
  </section>
  );
}
