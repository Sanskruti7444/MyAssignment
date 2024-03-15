
import './App.css';
import Header from './Header'
import Middleware from './Middleware'
import Col from './Col'



function App() {
  return (
    <>
      <Header></Header>
      <Middleware></Middleware>
      
      <section className="WhyChoose">
        <h3> Why To Choose This Futuristic Programmes</h3>
        <br></br>
        <ul>
          <li><strong>Guided by Experienced:</strong> Mr. Arun's extensive experience in the field. Learn the tricks of the trade that can't be found in textbooks.</li>
          <li><strong>Interactive Sessions:</strong> Interesting sessions, Get personalized feedback and guidance from Mr. Arun himself.</li>
          <li><strong>Peer Groups:</strong> There should be peer groups to whome you can Connect with fellow aspiring journalists from around the globe. Build lasting relationships and expand your professional network.</li>
          <li><strong>Lifetime Access:</strong> Once you enroll, you'll have lifetime access to course materials, updates, and exclusive content. Continue learning and growing at your own pace.</li>
        </ul>
        </section>

        <Col></Col>
        <section className="EnrollNow">
          <div>
       <h2 style={{ color: 'red' }}>Limited Seats Available- Enroll Now!</h2>
        </div>
        <p>Don't miss this exclusive opportunity to learn from one of the industry's finest. Secure your spot today and embark on a transformative journey into the world of journalism with Mr. Arun as your guide.</p>
        
      </section>

    </>

  );
}

export default App;
