const jobs = [
    {
        id: 5,
        title: 'Senior Machine Learning Developer',
        company: 'Giatec Scientific Inc.',
        location: 'Ottawa, ON',
        description: [
            'Developed an API that implements deep learning models to predict concrete performance and an optimization algorithm that generates concrete recipes to reduce costs by 20%',
            'Deployed convolutional and recurrent neural nets, on AWS, to predict concrete pouring times from time-series temperature data',
            'Led a team to develop a supervised outlier detection model to detect anomalies in concrete properties',
            'Implemented Bayesian neural nets to model uncertainty in concrete performance with tensorflow probability',
            'Wrote data processing and model training pipelines in Python & SQL and optimized the models on Azure Machine Learning',
        ],
        dates: 'May 2019 - Present',
        image_path: '/giatec.png',
    },
    {
        id: 4,
        title: 'Machine Learning Researcher',
        company: 'Moses Lab, University of Toronto',
        location: 'Toronto, ON',
        description: [
            'Derived a novel machine learning algorithm to cluster biological data, deployed it as a Python package (dphmix), and presented it at the world’s largest bioinformatics conference',
            'Implemented a Bayesian machine learning model in C++ to detect anomalies in DNA sequences',
        ],
        dates: 'Sep 2017 - Jan 2019',
        image_path: '/moses.jpg',
    },
    {
        id: 3,
        title: 'Bioinformatician',
        company: 'Lupien Lab, University Health Network',
        location: 'Toronto, ON',
        description: [
            'Deployed a statistical method in R that predicts important regions of DNA and creates visualizations to analyze the results',
            'Formulated and implemented a novel clustering method to cluster proteins with DNA mutations',
        ],
        dates: 'Sep 2015 - Dec 2016',
        image_path: '/ml_logo.png',
    },
    {
        id: 2,
        title: 'Database Administrator/ Technician',
        company: 'Canadian Space Agency',
        location: 'Ottawa, ON',
        description: [
            'Wrote SQL scripts to update MySQL databases',
        ],
        dates: 'Jan - Apr 2015',
        image_path: '/csa.png',
    },
    {
        id: 1,
        title: 'Web Statistics Specialist',
        company: 'Agriculture and Agri-Food Canada',
        location: 'Ottawa, ON',
        description: [
            'Wrote Perl and Bash scripts to manage 60 databases and generated web analytics reports',
        ],
        dates: 'Apr 2013 - Aug 2014',
        image_path: '/canada.jpg',
    }
];

export default jobs;
