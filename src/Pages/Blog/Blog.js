import React from 'react';

const Blog = () => {
    return (
      <div>
        <div className="p-4">
          <h1 className="text-3xl mb-3">1. Difference between SQL and NoSQL</h1>
          <p>
            <samp className="text-3xl">SQL</samp>RELATIONAL DATABASE MANAGEMENT
            SYSTEM (RDBMS). These databases have fixed or static or predefined
            schema. These databases are not suited for hierarchical data
            storage. These databases are best suited for complex queries
            Vertically Scalable. Follows ACID property. Examples: MySQL,
            PostgreSQL, Oracle, MS-SQL Server etc
          </p>
          <p className="m-3">
            <samp className="text-3xl">NoSQL</samp>
            Non-relational or distributed database system. They have dynamic
            schema. These databases are best suited for hierarchical data
            storage. These databases are not so good for complex queries.
            Horizontally scalable. Follows CAP(consistency, availability,
            partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j,
            Cassandra etc
          </p>
        </div>

        <div className="p-4">
          <h1 className="text-3xl mb-3">2. What is JWT and how does it work</h1>
          <p>
            <samp className="text-3xl">JWT</samp> JSON Web Token (JWT) is an
            open standard (RFC 7519) that defines a compact and self-contained
            way for securely transmitting information between parties as a JSON
            object. This information can be verified and trusted because it is
            digitally signed. JWTs can be signed using a secret (with the HMAC
            algorithm) or a public/private key pair using RSA or ECDSA.
            Authorization: This is the most common scenario for using JWT. Once
            the user is logged in, each subsequent request will include the JWT,
            allowing the user to access routes, services, and resources that are
            permitted with that token. Single Sign On is a feature that widely
            uses JWT nowadays, because of its small overhead and its ability to
            be easily used across different domains. Information Exchange: JSON
            Web Tokens are a good way of securely transmitting information
            between parties. Because JWTs can be signed—for example, using
            public/private key pairs—you can be sure the senders are who they
            say they are. Additionally, as the signature is calculated using the
            header and the payload, you can also verify that the content hasn't
            been tampered with. The second part of the token is the payload,
            which contains the claims. Claims are statements about an entity
            (typically, the user) and additional data. There are three types of
            claims: registered, public, and private claims.
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-3xl mb-3">
            3. Difference between Javascript and NodeJs
          </h1>
          <p>
            <samp className="text-3xl">NodeJS </samp>NodeJS is a cross-platform
            and opensource Javascript runtime environment that allows the
            javascript to be run on the server-side. Nodejs allows Javascript
            code to run outside the browser. Nodejs comes with a lot of modules
            and mostly used in web development. NodeJS is a Javascript runtime
            environment. Nodejs does not have capability to add HTML tags. We
            can run Javascript outside the browser with the help of NodeJS.
            Nodejs is written in C, C++ and Javascript.
          </p>
          <p className="m-3">
            <samp className="text-3xl">JavaScript </samp>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
            Javascript is a programming language that is used for writing
            scripts on the website. Javascript is capable enough to add HTML and
            play with the DOM. Javascript can run in any browser engine as like
            JS core in safari and Spidermonkey in Firefox. It is the upgraded
            version of ECMA script that uses Chrome’s V8 engine written in C++.
            Some of the javascript frameworks are RamdaJS, TypedJS, etc.
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-3xl mb-3">
            4. how handle nodejs many request at a time
          </h1>
          <p>
            <samp className="text-3xl">nodeJS</samp> NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them. EventLoop is the listener for the EventQueue. If
            NodeJS can process the request without I/O blocking then the event
            loop would itself process the request and sends the response back to
            the client by itself. But, it is possible to process multiple
            requests parallelly using the NodeJS cluster module or
            worker_threads module. How to scale your NodeJS application with
            Cluster Module? A single instance of Node.js runs in a single
            thread. If you have a multi-core system then you can utilize every
            core. Sometimes developer wants to launch a cluster of NodeJS
            process to take advantage of the multi-core system. The cluster
            module allows easy creation of child processes that all share the
            same server ports.
          </p>
        </div>
      </div>
    );
};

export default Blog;