import Navbar from "./navbar";
import '../Style/admins.css'
const Admin = () => {
    return ( 
         <div className="ad">
        <Navbar/>
      <div className="admin">
         <div className="image">
            <h1>Where the Crawdads Sing</h1>
            <p>On Friday, March 10 at 7:00 pm, come see the adaptation of the bestselling novel about a girl raising herself in the marshlands of North Carolina.</p>
            <button> Register Here</button>
         </div>
         </div>
         
         <div className="nav">
         <ul>
            <li> <a href="">View</a> </li>
            <li> <a href="">Explore</a> </li>
            <li> <a href="">Learn</a> </li>
            <li> <a href="">Support</a> </li>
            <li> <a href="">About</a> </li>
            <li> <a href="">Help</a> </li>
         </ul>
      </div>
      <div className="navimg">
         <div className="det">
         <p>VISIT</p>
         <h1>Café at Greenwich Library</h1>
         <p>Theres no need to stroll down the Ave for a meal when you’re at the Library! Visit our lower level to get coffee, drinks, snacks, and lunch options, locally sourced from favorites like Happiness Is and Shearwater Coffee.</p>
         <button>Place an order</button>
      </div>
      </div>
      <div className="rul">
         <h1>March Events</h1>
         <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</p>
         <button>Printable Event Calenders</button>
      </div>
      <div className="box">
        
         <div className="b">
            <h1>Tax Help</h1>
            <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
            <a href="">Learn More</a>
            </div>
            <div className="b">
            <h1>Sea Glass Frames</h1>
            <p>On Saturday, March 11 at 10:30 am at Cos Cob Library, join us to create fun and breezy sea glass frames!</p>
            <a href="">Register Here</a>
         </div>
         <div className="b">
            <h1>Protect Yourself Online</h1>
            <p>On Wednesday, March 15 at 3:00 pm, find out the ten vital practices to protect your personal information and finances.</p>
            <a href="">Mark Your Calender</a>
            </div>
            <div className="b">
            <h1>Adopt-a-Shelf</h1>
            <p>On Tuesday, March 14 at 10:30 am, volunteer at the Library by taking care of a shelf twice a month at a time that works for you.</p>
            <a href="">Become a Volunteer</a>
</div>
         
      </div>


      </div>
     );
}
 
export default Admin;