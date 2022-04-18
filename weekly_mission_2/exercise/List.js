const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    
   ]
   console.log("Name of the list")
   explorers.forEach(names => console.log(names.name))
   console.log("Stak of the list")
   explorers.forEach(names => console.log( names.stack))
   console.log("New list of staks whit map")
   const Newlist = explorers.map(function(num){ return num.stack})
   console.log("filter user whit stak js")
//    const newlistjs = explorers.filter((stack) =>  stack[0].includes('js')
//     )
//     console.log(newlistjs);  pendiente
   console.log("Find  Cdmx");
   const Fcdmx = explorers.find((Cdmx) => Cdmx = "CDMX")
   console.log(Fcdmx);
   console.log("exercises_completed add");
   const resultsum = explorers.reduce((acc, exercises_completed) => exercises_completed + acc)
   console.log(resultsum)//pendiente ver valor
