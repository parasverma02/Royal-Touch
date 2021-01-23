const data = [
    {
        serviceName: 'Skin Care',
        id: 'SkinCare',
        subServices: [ 
            {
                name: 'Skin Service1', 
                id: 'SkinService1',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'SS1 Child Service 1',
                        id: 'SS1_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS1 Child Service 2',
                        id: 'SS1_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS1 Child Service 3',
                        id: 'SS1_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }, 
            {
                name: 'Skin Service2', 
                id: 'SkinService2',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'SS2 Child Service 1',
                        id: 'SS2_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS2 Child Service 2',
                        id: 'SS2_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS2 Child Service 3',
                        id: 'SS2_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            },
            {
                name: 'Skin Service3', 
                id: 'SkinService3',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'SS3 Child Service 1',
                        id: 'SS3_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS3 Child Service 2',
                        id: 'SS3_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'SS3 Child Service 3',
                        id: 'SS3_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }
        ]
    },
    {
        
        serviceName: 'Hair Care',
        id: 'HariCare',
        subServices: [ 
            {
                name: 'Hair Service1', 
                id: 'HairService1',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'HS1 Child Service 1',
                        id: 'HS1_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS1 Child Service 2',
                        id: 'HS1_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS1 Child Service 3',
                        id: 'HS1_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }, 
            {
                name: 'Hair Service2', 
                id: 'HairService2',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'HS2 Child Service 1',
                        id: 'HS2_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS2 Child Service 2',
                        id: 'HS2_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS2 Child Service 3',
                        id: 'HS2_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            },
            {
                name: 'Hair Service3',
                id: 'HairService3',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'HS3 Child Service 1',
                        id: 'HS3_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS3 Child Service 2',
                        id: 'HS3_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'HS3 Child Service 3',
                        id: 'HS3_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }
        ]
    },
    {
        serviceName: 'Makeup',
        id: 'Makeup',
        subServices: [
            {
                name: 'Makeup Service1', 
                id: 'MakeupService1',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'MS1 Child Service 1',
                        id: 'MS1_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS1 Child Service 2',
                        id: 'MS1_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS1 Child Service 3',
                        id: 'MS1_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }, 
            {
                name: 'Makeup Service2', 
                id: 'MakeupService2',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'MS2 Child Service 1',
                        id: 'MS2_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS2 Child Service 2',
                        id: 'MS2_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS2 Child Service 3',
                        id: 'MS2_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            },
            {
                name: 'Makeup Service3', 
                id: 'MakeupService3',
                description: 'This is Description!',
                childServices: [
                    {
                        name: 'MS3 Child Service 1',
                        id: 'MS3_CS1',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS3 Child Service 2',
                        id: 'MS3_CS2',
                        description: 'This is child service descritpion!',
                        price: 10
                    },
                    {
                        name: 'MS1 Child Service 3',
                        id: 'MS3_CS3',
                        description: 'This is child service descritpion!',
                        price: 10
                    }
                ]
            }
        ]
    }
]

export default data