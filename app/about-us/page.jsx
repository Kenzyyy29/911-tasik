const About = () => {
 return (
  <div className="flex flex-col">
   <section
    className="h-screen w-full flex items-center justify-center text-white"
    style={{
     backgroundImage: "url('/3.jpeg')",
     height: "100vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="text-center bg-black/40 h-full w-full flex flex-col items-center justify-center">
     Hello World
    </div>
   </section>
  </div>
 );
};

export default About;
