const questions = [
    {
        text: "Do you require a schema-less database?",
        description: "A schema-less database allows for storing data without a predefined structure, offering flexibility to change the data model on the fly. Ideal for situations where data structure can vary or is undefined.",
        example: "Perfect for a startup whose product features and data requirements are rapidly evolving.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Will you be storing large volumes of structured data?",
        description: "Structured data is organized in a clear format like tables, making it suitable for relational databases. Useful for applications requiring complex queries and relationships between data entities.",
        example: "Essential for a financial system with complex relationships between accounts, transactions, and users.",
        type: "Relational",
        answer: null
    },
    {
        text: "Do you need to scale horizontally (across many servers)?",
        description: "Horizontal scaling involves adding more machines to your pool of resources to manage load. It's important for systems expecting rapid growth or large spikes in traffic.",
        example: "Critical for a viral social media application expecting rapid user growth.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Is ACID compliance crucial for your application?",
        description: "ACID compliance guarantees reliable processing of database transactions. Critical for applications that manage financial data or require strict data integrity.",
        example: "A must-have for online banking apps where transaction integrity is paramount.",
        type: "Relational",
        answer: null
    },
    {
        text: "Do you need to perform complex transactions (e.g., joins)?",
        description: "Complex transactions involve multiple steps and data integrity checks. Necessary for applications that manage related data across different tables or entities.",
        example: "Vital for an e-commerce platform that needs to join user data with order and product information.",
        type: "Relational",
        answer: null
    },
    {
        text: "Is your data highly connected, requiring graph-like structures?",
        description: "Graph databases excel at managing highly interconnected data, such as social networks or recommendation engines, where relationships between data points are key.",
        example: "Ideal for building a recommendation engine that suggests products based on user's social connections.",
        type: "Graph",
        answer: null
    },
    {
        text: "Do you need real-time data processing and analytics?",
        description: "If your application must analyze and act on data in milliseconds, consider in-memory databases for their speed in data processing and analytics.",
        example: "Crucial for real-time analytics in a stock trading application where milliseconds can make a difference.",
        type: "InMemory",
        answer: null
    },
    {
        text: "Are you working with time-series data?",
        description: "Time-series databases are optimized for chronological data, such as sensor data, stock market data, or any data that tracks changes over time.",
        example: "Suitable for an IoT application monitoring temperature changes in a manufacturing process.",
        type: "TimeSeries",
        answer: null
    },
    {
        text: "Do you require full-text search capabilities?",
        description: "Full-text search allows you to efficiently search large volumes of text. This is essential for applications like content management systems or e-commerce platforms.",
        example: "Necessary for a content-heavy site where users need to search through articles, blogs, and product reviews.",
        type: "Search",
        answer: null
    },
    {
        text: "Will you store multimedia content (images, videos)?",
        description: "Storing and managing large files like images and videos requires databases optimized for multimedia content, often using NoSQL for its flexibility and scalability.",
        example: "Important for a media streaming service storing and delivering large volumes of video content.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Is data versioning important for your application?",
        description: "Data versioning keeps track of changes over time, allowing you to revert or audit changes. This is crucial for content management systems or collaborative applications.",
        example: "Essential for a document collaboration tool where tracking every edit and version of a document is necessary.",
        type: "Document",
        answer: null
    },
    {
        text: "Do you need to support a global, distributed system?",
        description: "Distributed systems require databases that can replicate data across multiple locations, ensuring high availability and resilience.",
        example: "Key for a global e-commerce platform that serves customers around the world, requiring data to be close to users for fast access.",
        type: "Distributed",
        answer: null
    },
    {
        text: "Is low-latency data access critical for your use case?",
        description: "Applications requiring immediate response times, such as financial trading platforms or online gaming, need databases designed for low-latency access.",
        example: "Critical for an online multiplayer game where every millisecond of delay can affect the gameplay experience.",
        type: "InMemory",
        answer: null
    },
    {
        text: "Will your application need to handle massive read/write operations per second?",
        description: "High throughput for read/write operations is essential for large-scale applications, such as social media platforms or IoT systems.",
        example: "Necessary for a social networking site with millions of users posting status updates, comments, and likes in real-time.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Do you need automatic sharding and partitioning of data?",
        description: "Sharding and partitioning help manage large datasets by distributing them across multiple servers, improving performance and scalability.",
        example: "Useful for a user analytics platform that processes and stores data across multiple servers to manage load and optimize query performance.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Are you dealing with IoT devices or sensor data?",
        description: "IoT applications often generate vast amounts of time-series data, requiring databases that can efficiently store and query time-stamped data.",
        example: "Ideal for managing data from thousands of sensors in a smart city project, tracking everything from traffic to environmental conditions.",
        type: "TimeSeries",
        answer: null
    },
    {
        text: "Is long-term data storage a primary concern?",
        description: "If you need to store data for long periods, consider databases optimized for data durability and archival, often with considerations for cost and accessibility.",
        example: "Important for legal and medical records that must be preserved for decades in a secure, accessible manner.",
        type: "Relational",
        answer: null
    },
    {
        text: "Do you require advanced analytical capabilities?",
        description: "Advanced analytics involve complex data processing, often necessitating specialized databases that support data warehousing and big data processing.",
        example: "Crucial for a business intelligence platform that performs complex queries across terabytes of data to generate insights.",
        type: "Columnar",
        answer: null
    },
    {
        text: "Will your data access patterns be primarily read-heavy or write-heavy?",
        description: "Understanding whether your application reads data more often than it writes, or vice versa, can influence the choice between databases optimized for read efficiency or write efficiency.",
        example: "For a read-heavy application like a news aggregator, a database optimized for read operations would be more suitable.",
        type: "Both",
        answer: null
    },
    {
        text: "Do you plan to implement machine learning algorithms directly within the database?",
        description: "Some databases offer integrated machine learning capabilities, allowing for data analysis and model training directly on the stored data.",
        example: "Beneficial for a customer relationship management system that uses machine learning to predict customer behavior based on historical data.",
        type: "AdvancedAnalytics",
        answer: null
    },
    {
        text: "Is budget a significant constraint for your database choice?",
        description: "Budget constraints may lead you towards open-source databases, which are free to use but may require more management effort, or cloud-based solutions that offer cost-effective scalability.",
        example: "Ideal for startups looking to minimize expenses with open-source databases like PostgreSQL, or utilizing cost-effective cloud solutions like Amazon RDS.",
        type: "OpenSource",
        answer: null
    },
    {
        text: "Do you need to comply with specific data security regulations (e.g., GDPR, HIPAA)?",
        description: "Compliance with data security and privacy regulations is crucial for applications handling sensitive information, influencing the need for databases that offer robust security features.",
        example: "Essential for healthcare applications managing patient records, requiring HIPAA-compliant databases to ensure data privacy and security.",
        type: "Both",
        answer: null
    },
    {
        text: "Is database replication across multiple locations needed for high availability?",
        description: "Database replication ensures that your data is copied across multiple locations, which is crucial for disaster recovery and maintaining high availability.",
        example: "Critical for financial services that cannot afford downtime, requiring multi-region replication to ensure continuous availability.",
        type: "Distributed",
        answer: null
    },
    {
        text: "Will you need support for JSON/BSON data formats?",
        description: "Support for JSON/BSON formats is important for applications that use document stores or need to work with data in a flexible, semi-structured format.",
        example: "Useful for web applications that interact with NoSQL document databases like MongoDB, which uses BSON format for storing documents.",
        type: "Document",
        answer: null
    },
    {
        text: "Are you planning to use the database for a mobile application?",
        description: "Mobile applications may require lightweight, embedded databases that can run locally on a device or synchronize with a central database.",
        example: "Necessary for offline-capable mobile apps, using databases like SQLite or Realm, which can synchronize data with a central server.",
        type: "Mobile",
        answer: null
    },
    {
        text: "Do you need support for geospatial data and queries?",
        description: "Geospatial databases are optimized for storing and querying data related to locations and geographic areas, useful for mapping and location-based services.",
        example: "Vital for location-based services like ride-sharing apps or geographic information systems (GIS) that require efficient querying of spatial data.",
        type: "NoSQL",
        answer: null
    },
    {
        text: "Will you implement event sourcing patterns?",
        description: "Event sourcing involves storing each change to the application state as a series of events. This pattern is useful for systems requiring audit trails or undo functionality.",
        example: "Important for applications that require a complete history of changes, such as financial transaction systems where every action needs to be traceable.",
        type: "EventSourcing",
        answer: null
    },
    {
        text: "Is write-ahead logging (WAL) necessary for your application?",
        description: "WAL is a method of ensuring data integrity by recording changes to a log before the actual data is written to the database. It's crucial for recovering from crashes or errors.",
        example: "Crucial for systems where data integrity is paramount, ensuring that every transaction is logged before it's committed to the database.",
        type: "Relational",
        answer: null
    },
    {
        text: "Do you require multi-model database support (e.g., documents, key-value, graph)?",
        description: "Multi-model databases can store different types of data, such as documents, graphs, and key-values, in a single database, offering flexibility for diverse data models.",
        example: "Beneficial for complex applications that need to manage different types of data relationships and structures, like an e-commerce platform that manages user data, product catalogs, and recommendations.",
        type: "MultiModel",
        answer: null
    },
    {
        text: "Are serverless database capabilities important for your project?",
        description: "Serverless databases automatically manage scaling and operation, allowing developers to focus on application logic without worrying about database management.",
        example: "Ideal for projects with variable workloads, where managing infrastructure and scaling needs can be offloaded to cloud services like AWS Lambda.",
        type: "Serverless",
        answer: null
    },
    {
        text: "Do you require on-demand scalability without managing the database servers?",
        description: "Cloud databases offer scalability on demand, handling sudden spikes in traffic or data volume without the need for manual intervention in server management.",
        example: "Perfect for seasonal businesses or applications that experience unpredictable loads, allowing them to scale database resources up or down automatically.",
        type: "Cloud",
        answer: null
    },
    {
        text: "Is your application centered around blockchain or distributed ledger technology?",
        description: "Blockchain databases are designed for applications requiring decentralized data management, ensuring transparency, security, and immutability of data transactions.",
        example: "Essential for applications that require tamper-evident data recording, like supply chain monitoring or digital identity verification systems.",
        type: "Blockchain",
        answer: null
    },
    {
        text: "Will you need native XML or RDF support for your data?",
        description: "Native XML or RDF support is crucial for applications that store, query, and manipulate XML or RDF data formats, often used in configurations, data exchange, and semantic web projects.",
        example: "Important for applications working with complex data interchange formats or implementing semantic web technologies that rely on RDF for data modeling.",
        type: "XML_RDF",
        answer: null
    },
    {
        text: "Are you building a content management system that requires heavy text content storage and retrieval?",
        description: "Content management systems need databases that can efficiently store, manage, and retrieve large volumes of text content, often with support for full-text search and data versioning.",
        example: "Necessary for large-scale content management systems or publishing platforms that manage and serve vast amounts of textual content and media.",
        type: "Document",
        answer: null
    },
    {
        text: "Is data warehousing and business intelligence a key component of your data strategy?",
        description: "Data warehousing databases are optimized for analyzing large datasets, supporting business intelligence activities such as reporting, analysis, and data mining.",
        example: "Critical for organizations that rely on data-driven decision-making, requiring robust solutions for storing and analyzing historical data for insights.",
        type: "DataWarehouse",
        answer: null
    },
    {
        text: "Do you need to manage large datasets for scientific or research purposes?",
        description: "Managing large datasets requires databases capable of handling big data, supporting efficient storage, processing, and analysis of vast amounts of information.",
        example: "Essential for research institutions and scientific projects that collect and analyze large volumes of data, such as genomic sequencing or climate modeling.",
        type: "BigData",
        answer: null
    },
    {
        text: "Are you interested in a database that supports SQL and NoSQL models for flexibility?",
        description: "Hybrid databases offer the flexibility to use both SQL for structured data and NoSQL for unstructured data, catering to applications that require diverse data storage models.",
        example: "Suitable for businesses that need the traditional structure of SQL databases for some data and the flexibility of NoSQL for others, such as customer records (SQL) and user-generated content (NoSQL).",
        type: "Hybrid",
        answer: null
    },
    {
        text: "Is the ability to run in-memory computations important for your processing needs?",
        description: "In-memory databases store data in RAM, significantly speeding up data processing and analysis. They are ideal for real-time applications requiring fast data access.",
        example: "Critical for real-time analytics and processing, such as fraud detection systems that analyze transactions in real-time for suspicious activity.",
        type: "InMemory",
        answer: null
    },
    {
        text: "Do you prefer a managed database service to reduce operational overhead?",
        description: "Managed database services handle maintenance tasks such as backups, scaling, and updates, allowing teams to focus more on development and less on database management.",
        example: "Attractive for small teams or startups that lack dedicated database administrators, allowing them to use managed services like Amazon RDS or Google Cloud SQL.",
        type: "ManagedService",
        answer: null
    },
    {
        text: "Is your primary concern the ability to efficiently process and analyze streaming data in real-time?",
        description: "Streaming data processing is crucial for applications that need to analyze and act on data in real-time, such as monitoring systems, financial tickers, or social media feeds.",
        example: "Imperative for applications monitoring real-time data streams, such as IoT sensor networks or live financial trading platforms.",
        type: "StreamProcessing",
        answer: null
    }
];


let currentQuestionIndex = 0;
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const questionCounterDiv = document.getElementById("questionCounter");

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        quizDiv.innerHTML = `
            <div class="flex flex-col justify-between h-full mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl">
                <div class="mb-6">
                    <div class="text-xl font-bold text-yellow-300">${question.text}</div>
                    <p class="mt-2 text-lg font-semibold text-white">${question.description}</p>
                    <div class="mt-2 text-sm bg-yellow-200 text-gray-800 p-2 rounded shadow-inner">Example: ${question.example}</div>
                </div>
                <div class="flex justify-center space-x-2">
                    <button onclick="saveAnswer(true)" class="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Yes</button>
                    <button onclick="saveAnswer(false)" class="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out transform hover:-translate-y-1">No</button>
                </div>
            </div>
        `;
        
        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        questionCounterDiv.innerHTML = `

            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div class="bg-purple-600 h-2.5 rounded-full" style="width: ${progressPercent}%"></div>
            </div>
        `;
    } else {
        suggestDatabase();
    }
}


function saveAnswer(answer) {
    questions[currentQuestionIndex].answer = answer;
    currentQuestionIndex++;
    displayQuestion();
}

function suggestDatabase() {
    let scores = { "Relational": 0, "NoSQL": 0, "Graph": 0, "InMemory": 0, "TimeSeries": 0, "Search": 0, "Document": 0, "Distributed": 0, "Columnar": 0, "AdvancedAnalytics": 0, "EventSourcing": 0, "MultiModel": 0, "Serverless": 0, "Cloud": 0, "Blockchain": 0, "XML_RDF": 0, "DataWarehouse": 0, "BigData": 0, "Hybrid": 0, "ManagedService": 0, "StreamProcessing": 0 };
    questions.forEach(question => {
        if (question.answer === true) {
            scores[question.type]++;
        }
    });


    let databaseExamples = {
        "Relational": ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
        "NoSQL": ["MongoDB", "Cassandra", "Redis", "Amazon DynamoDB"],
        "Graph": ["Neo4j", "Amazon Neptune", "OrientDB"],
        "InMemory": ["Redis", "Memcached"],
        "TimeSeries": ["InfluxDB", "TimescaleDB"],
        "Search": ["Elasticsearch", "Apache Solr"],
        "Document": ["MongoDB", "Couchbase"],
        "Distributed": ["Cassandra", "Couchbase", "HBase"],
        "Columnar": ["Amazon Redshift", "Apache HBase"],
        "AdvancedAnalytics": ["Apache Spark", "Hadoop"],
        "EventSourcing": ["EventStore", "Apache Kafka"],
        "MultiModel": ["ArangoDB", "MarkLogic"],
        "Serverless": ["Amazon Aurora Serverless", "Google Cloud Firestore"],
        "Cloud": ["Amazon RDS", "Google Cloud SQL"],
        "Blockchain": ["BigchainDB", "Hyperledger Fabric"],
        "XML_RDF": ["MarkLogic", "BaseX", "Virtuoso"],
        "DataWarehouse": ["Amazon Redshift", "Google BigQuery"],
        "BigData": ["Hadoop", "Cassandra", "HBase"],
        "Hybrid": ["ArangoDB", "MarkLogic", "Couchbase", "OrientDB"],
        "ManagedService": ["Amazon RDS", "Google Cloud SQL", "Azure SQL Database", "Firebase", "Firestore", "DynamoDB", "CosmosDB", "DocumentDB"],
        "StreamProcessing": ["Apache Kafka", "Amazon Kinesis","Apache Flink"]
    };

    let recommendations = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    let suggestionText = recommendations[0][1] > 0 ? "Based on your answers, we suggest considering: " : "Based on your answers, it's difficult to suggest a specific database type. Please consider your requirements further or consult with a database specialist.";

    recommendations.slice(0, 3).forEach(([type, score], index) => {
        if (score > 0) {
            let examples = databaseExamples[type]?.join(", ") || "No examples available";
            suggestionText += `<br>${index + 1}. ${type} databases (e.g., ${examples}).`;
        }
    });

    resultDiv.innerHTML = `<h2>Suggested Database Type:</h2><p>${suggestionText}</p><p><i>Explore databases within these suggestions to find the one that best suits your specific needs.</i></p>`;
}

displayQuestion();
