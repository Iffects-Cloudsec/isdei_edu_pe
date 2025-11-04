import Navigation from './components/Navigation';
import HeroSlider from './components/HeroSlider';
import Statistics from './components/Statistics';
import SpecializedCourses from './components/SpecializedCourses';
import WhyChooseUs from './components/WhyChooseUs';
import VideoSection from './components/VideoSection';
import AcademicPlatform from './components/AcademicPlatform';
import Evaluations from './components/Evaluations';
import ManagementTools from './components/ManagementTools';
import InteractiveTools from './components/InteractiveTools';
import CourseCarousel from './components/CourseCarousel';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSlider />
      <Statistics />
      <SpecializedCourses />
      <WhyChooseUs />
      <VideoSection />
      <AcademicPlatform />
      <Evaluations />
      <ManagementTools />
      <InteractiveTools />
      <CourseCarousel />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
