const About = () => {
  return (
    <div className="about">
      <div>
        <h1 style={{ fontSize: "30px" }}>what is React ?</h1>
        <p style={{ fontSize: "20px" }}>
          React. js is an open-source JavaScript library that is used for
          building user interfaces specifically for single-page applications.
          ... React allows developers to create large web applications that can
          change data, without reloading the page. The main purpose of React is
          to be fast, scalable, and simple.
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: "30px" }}> what is Javascript ?</h1>
        <p style={{ fontSize: "20px" }}>
          JavaScript is a text-based programming language used both on the
          client-side and server-side that allows you to make web pages
          interactive. Where HTML and CSS are languages that give structure and
          style to web pages, JavaScript gives web pages interactive elements
          that engage a user.
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: "30px" }}>what is Angular ?</h1>
        <p style={{ fontSize: "20px" }}>
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript. ... It implements core and
          optional functionality as a set of TypeScript libraries that you
          import into your applications. The architecture of an Angular
          application relies on certain fundamental concepts.
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: "30px" }}>what is SQL ?</h1>
        <p style={{ fontSize: "20px" }}>
          SQL is used to communicate with a database. According to ANSI
          (American National Standards Institute), it is the standard language
          for relational database management systems. SQL statements are used to
          perform tasks such as update data on a database, or retrieve data from
          a database.
        </p>
      </div>
    </div>
  );
};

export default About;
