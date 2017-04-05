import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  count: number = 0;
  items = [
    {
      image: '1.jpg',
      title: 'Hot and sour soup',
      intro: 'This Rosemary Chicken Noodle Soup recipe is kicked up a notch with the addition of lots of fresh aromatic rosemary, and it\'s ready to go inabout 30 minutes!',
      timeprep: '8',
      timecook: '22',
      yield:'8 servings',
      ingredients: ["8 cups chicken or vegetable stock",
        "8 ounces shiitake mushrooms (or baby bella mushrooms), thinly-sliced with stems discarded",
        "optional: 1 (8-ounce) can bamboo shoots, drained",
        "1/4 cup rice vinegar, or more to taste",
        "1/4 cup reduced-sodium soy sauce",
        "2 teaspoons ground ginger",
        "1 teaspoon chili garlic sauce",
        "1/4 cup cornstarch",
        "2 large eggs, whisked",
        "8 ounces firm tofu*, cut into 1/2-inch cubes",
        "4 green onions (scallions), thinly sliced",
        "1 teaspoon toasted sesame oil",
        "Kosher salt and black pepper or white pepper"],
      directions: [
        "Heat oil in a large stockpot over medium-high heat.",
        "Add onion and saute for 4 minutes, stirring occasionally. ",
        " Add carrots and celery and saute for another 3-4 minutes, or until the carrots are softened a bit.  Add garlic and saute for an additional 1-2 minutes, or until fragrant.  Add chicken stock and stir until combined.  Gently stir the rosemary into the soup, then continue cooking until the soup reaches a simmer.  Reduce heat to medium, and simmer for an additional 5 minutes until the broth has your desired level of rosemary flavor.  (You can add in more rosemary if needed.)",
        "Once the broth is ready, remove the rosemary, and stir in the egg noodles and chicken.  Continue cooking for 8-10 minutes or until the egg noodles are al dente.  (The longer they cook, the more broth they will soak up.  Feel free to add more chicken stock if desired.)  Season the soup with salt and pepper to taste.",
        "Serve warm, garnished with extra black pepper and fresh parsley if desired."
      ]
    },
    {
      image: '2.jpg',
      title: 'Chicken, Bacon and Avocado Chopped Salad',
      intro: 'This Chicken, Bacon and Avocado Chopped Salad is full of some of my favorite savory ingredients, and tossed with a delicious red wine vinaigrette.',
      timeprep: '15',
      timecook: '20',
      ingredients: [
        "1 head of Romaine lettuce, chopped (about 5-6 cups)",
        "4 slices bacon, cooked and diced",
        "2 cups diced (or shredded) cooked chicken",
        "1 cup halved cherry tomatoes (or diced Roma tomatoes)",
        "1/2 cup diced red onion",
        "4 ounces blue cheese, crumbled",
        "1 avocado, peeled, pitted and diced",
        "1/4 cup red wine vinaigrette (see recipe below)",
        "1/4 cup olive oil",
        "3 tablespoons red wine vinegar",
        "3 garlic cloves, minced or pressed",
        "2 teaspoons Dijon mustard",
        "1 teaspoon Italian seasoning",
        "pinch of salt and freshly-cracked black pepper"
      ],
      directions: [
        "To Make The Salad:",
        "Combine the lettuce, bacon, chicken, tomatoes, red onion, blue cheese and avocado together in a large mixing bowl.  Drizzle evenly with the vinaigrette, and toss to combine.",
        "Serve immediately.",
        "To Make The Vinaigrette:",
        "Whisk all ingredients together until combined."
      ]
    },
    {
      image: '3.jpg',
      title: 'Instant Pot Crispy Carnitas',
      intro: 'These Instant Pot Crispy Carnitas are super quick and easy to make with a pressure cooker, and marinated in the most delicious Cuban mojo sauce!',
      timeprep: '5',
      timecook: '55',
      yield:'4-6 servings',
      ingredients: [
        "Instant Pot Crispy Carnitas Ingredients:",
        "1 (4-5 pound) lean boneless pork roast, excess fat trimmed, cut into 2-inch chunks",
        "salt and pepper",
        "1 tablespoon avocado oil or olive oil",
        "1 batch mojo sauce (see below)",
        "for serving: chopped fresh cilantro leaves and fresh salsa (I used the pineapple salsa below)",
        "Mojo Sauce Ingredients:",
        "1 cup beer (or chicken stock)",
        "1 head of garlic, cloves separated, peeled and minced",
        "1/2 cup fresh orange juice",
        "1/4 cup fresh lime juice",
        "1 teaspoon dried oregano",
        "1 teaspoon ground cumin",
        "1 teaspoons salt",
        "1/2 teaspoon freshly-cracked black pepper",
        "Optional: Fresh Pineapple Salsa",
        "2 cups finely-diced fresh pineapple",
        "1/2 cup finely-chopped fresh cilantro",
        "1/2 cup finely-diced red onion",
        "2 tablespoons lime juice",
        "1/2 teaspoon ground cumin",
        "1 jalapeño, seeded and finely-diced",
        "salt and pepper"
      ],
      directions: [
        "To Make The Instant Pot Crispy Carnitas:",
        "In a medium mixing bowl, prepare the mojo sauce (see below).",
        "Season pork chunks on all sides with salt and pepper.",
        'Click the "Saute" setting on the Instant Pot.  Add oil and half of the pork, and sear -- turning every 45-60 seconds or so -- until the pork is browned on all sides.  Transfer pork to a separate clean plate, and repeat with the other half of the pork, searing until browned on all sides.  Press "Cancel" to turn off the heat.',
        'Pour in the mojo sauce, and toss briefly to combine. Close lid securely and set vent to "Sealing"',
        'Press "Meat", then press "Pressure" until the light on "High Pressure" lights up, then adjust the up/down arrows until time reads 30 minutes.  Cook.  Then let the pressure release naturally, about 15 minutes.  Carefully turn the vent to "Venting", just to release any extra pressure that might still be in there.  Then remove the lid.',
        'Turn on the oven broiler to High.',
        "Shred the pork with two forks.  Then transfer it with a slotted spoon to a large baking sheet.  Spoon about a third of the leftover juices evenly on top of the pork.  Then broil for 4-5 minutes, or until the edges of the pork begin browning and crisping up. Remove the sheet from the oven, then ladle a remaining third of the juices from the Instant Pot evenly over the pork, and then give it a good toss with some tongs.  Broil for an additional 5 minutes to get the meat even more crispy. Then remove and ladle the final third of the juices over the pork, and toss to combine.",
        "Sprinkle with chopped fresh cilantro, then serve immediately in tacos, burritos, salads, or whatever sounds good to you! Or, refrigerat pork in a sealed container for up to 3 days, or freeze for up to 3 months.",
        "To Make The Mojo Sauce:",
        "Whisk all ingredients together in a medium mixing bowl until combined.",
        "To Make The Pineapple Salsa:",
        "Toss all ingredients together in a medium mixing bowl until combined.  Season with salt and pepper to taste, also adding in extra lime juice if desired.",
      ]
    },
    {
      image: '4.jpg',
      title: 'Pasta with Italian Sausage, Kale and Mushrooms',
      intro: 'This delicious Pasta with Italian Sausage, Kale and Mushrooms is full of big savory flavors, it\'s easy to prepare, and can be made vegetarian if you\'d like!',
      timeprep: '5',
      timecook: '25',
      yield:'4 servings',
      ingredients: [
        "1 pound uncooked pasta (I used campanelle)",
        "3 tablespoons extra-virgin olive oil, divided",
        " 1 pound Italian sausage (traditional, chicken or Field Roast*), sliced into rounds or crumbled",
        "salt and pepper",
        "1 pound (16 ounces) baby bella or white button mushrooms, quartered",
        "1 bunch fresh kale, roughly chopped (coarse stems removed)",
        "8 cloves garlic, peeled and thinly-sliced (or minced)",
        "1/3 cup dry white wine**",
        "pinch of crushed red pepper flakes",
        "lots and lots of Parmesan cheese",
      ],
      directions: [
        "Cook pasta in a large stock pot of generously-salted boiling water al dente according to package instructions.   Then reserve about 1/4 cup of pasta water on the side for later.  Drain the pasta, and set it aside.",
        "Meanwhile, as the pasta water is heating and the pasta is cooking, heat 1 tablespoon oil in a large sauté pan over medium-high heat.  Add the Italian sausage and sauté, flipping and stirring occasionally, until the sausage is browned and crispy on both sides.  Transfer the sausage to a separate plate with a slotted spoon, and set aside.",
        "Add the remaining 2 tablespoons oil to the pan (or add less oil if you're using traditional sausage that left behind grease after cooking), and add the mushrooms.  Sauté for 3 minutes, stirring occasionally, until browned.  Then add in the kale and garlic, and sauté for 3-4 minutes more, stirring occasionally, until the garlic is fragrant and the kale is softened.  Add in the white wine and crushed red pepper flakes, and stir to combine.  Simmer for 1 minute.",
        "Combine the cooked pasta with the mushroom mixture and sausage, and toss to combine.  Stir in some of the reserved pasta water if you'd like a slightly more saucy pasta.",
        "Serve immediately, garnished with lots of Parmesan cheese."
      ]
    },
    {
      image: '4.jpg',
      title: 'Guinness Beef Stew',
      intro: 'My favorite recipe for hearty and flavorful Guinness beef stew!',
      timeprep: '20',
      timecook: '120',
      yield:'8 servings',
      ingredients: [
        "2 tablespoons olive oil, divided",
        "3 pounds beef chuck roast, trimmed of excess fat and cut into bite-sized pieces",
        "Kosher salt and freshly-cracked black pepper",
        "1 large white or yellow onion, peeled and diced",
        "4 cloves garlic, peeled and minced",
        "1/3 cup flour",
        "1 (12 ounce) bottle Guinness beer",
        "4 cups beef stock",
        "3 large carrots, peeled and diagonally sliced into bite-sized pieces",
        "1.5 lbs. Yukon gold potatoes, cut into bite-sized pieces",
        "3 tablespoons tomato paste",
        "1 bay leaf",
        "1/2 teaspoon dried thyme",
        "optional garnish: chopped fresh parsley"
      ],
      directions: [
        "Season beef with a few generous pinches of salt and pepper.  Heat 1 tablespoon oil in a large stockpot over medium-high heat.  Add half of beef to pan.  Cook until seared, turning the beef every 30-45 seconds or so until all sides are browned.  Remove beef from pan with a slotted spoon, and transfer to a clean plate.  Add an additional 1 tablespoon oil to the stockpot, and repeat this process with the remaining half of the beef, transferring it afterwards to the plate as well.",
        "Add the onion to the stockpot (adding extra oil if needed, but usually there is leftover drippings/oil from the beef) and saute for 5 minutes, stirring occasionally. Add garlic and saute for 1 minute, stirring occasionally.  Then stir in the flour until it has evenly coated the onions, and cook for 1 minute, stirring occasionally.  Gradually stir in the Guinness, and use a wooden spoon to scrape the bottom of the pan to loosen any of those yummy brown bits. Stir in the beef stock, carrots, potatoes, tomato paste, bay leaf, thyme, and the cooked beef (along with any of its accumulated juices). Continue cooking until the stew reaches a simmer.  Then cover and reduce heat to medium-low.  Simmer over low for 1 1/2 hours, stirring occasionally, until the beef is tender and the potatoes are soft.",
        "Remove bay leaf and season with additional salt and pepper if needed.",
        "Serve warm garnished with chopped parsley if desired."
      ]
    },
    {
      image: '5.jpg',
      title: 'Pineapple Ginger Chicken Stir-Fry',
      intro: 'This delicious Pineapple Ginger Chicken Stir-Fry is quick and easy to make, and full of the best sweet and savory fresh flavors!',
      timeprep: '10',
      timecook: '10',
      yield:'8 servings',
      ingredients: [
        "Stir-Fry Ingredients:",
        "1 pound boneless skinless chicken breasts, cut into 1-inch pieces",
        "salt and freshly-cracked black pepper",
        "2 tablespoons peanut oil or olive oil, divided",
        "1 green bell pepper, cored and diced into 1-inch pieces",
        "1 small white onion, peeled and diced into 1-inch pieces",
        "1/2 pound fresh asparagus, cut into 1-inch pieces (with ends trimmed off)",
        "2 tablespoons minced fresh ginger",
        "3 cloves garlic, peeled and minced",
        "2 cups fresh or frozen pineapple chunks",
        "1 batch stir-fry sauce (see below)",
        "toppings: thinly-sliced green onions, toasted sesame seeds",
        "Stir-Fry Sauce Ingredients:",
        "3/4 cup chicken or vegetable stock",
        "3 tablespoons soy sauce",
        "2 tablespoons rice vinegar",
        "1 1/2 tablespoons cornstarch",
        "1 teaspoon toasted sesame oil",
        "optional: 1-2 tablespoons sriracha (if you'd like a spicier sauce)",
      ],
      directions: [
        "To Make The Stir-Fry:",
        "Season the chicken with a few pinches of salt and freshly-cracked black pepper.",
        "Heat 1 tablespoon oil in a large saute pan or wok over medium-high heat.  Add chicken and saute for 4-5 minutes, stirring occasionally, until the chicken is cooked through and no longer pink on the inside.  Transfer chicken with a slotted spoon to a separate plate, and set aside.",
        "Add the remaining 1 tablespoon oil to the pan, and add the bell pepper, onion and asparagus.  Saute for 4-5 minutes, stirring occasionally, or until the veggies reach your desired level of doneness.  (I saute until the onion is almost completely soft; I like it just a little bit crispy in a stir-fry.)  Then add in the ginger, garlic and pineapple, and toss to combine.  Saute for 1-2 more minutes, or until the garlic is fragrant.  Add the chicken back in, then stir in the sauce and let it cook for 1-2 minutes or until it has thickened, stirring occasionally.",
        "Serve warm, garnished with your desired toppings.  Or transfer to a sealed container and refrigerate for up to 3 days.",
        "To Make The Stir-Fry Sauce:",
        "Whisk all ingredients together in a small bowl until combined."
      ]
    },
    {
      image: '6.jpg',
      title: 'Roasted Pear, Blue Cheese & Arugula Salad',
      intro: 'It is this roasted pear, blue cheese, cranberry, walnut and arugula salad',
      timeprep: '10',
      timecook: '30',
      yield:'8 servings',
      ingredients: [
        "3 ripe but firm Anjou pears (or I used Bartlett)",
        "freshly squeezed lemon juice (3 lemons)",
        "3 ounces coarsely crumbled sharp blue cheese",
        "1/4 cup dried cranberries",
        "1/4 cup walnut halves, toasted and chopped",
        "1/2 cup apple cider",
        "3 Tbsp. port (or red wine)",
        "1/3 cup light brown sugar, lightly packed",
        "1/4 cup good olive oil",
        "6 ounces baby arugula",
        "salt",
      ],
      directions: [
        "Preheat the oven to 375 degrees F.",
        "Peel the pears and slice them lengthwise into halves. With a small sharp paring knife and a melon-baller, remove the core and seeds from each pear, leaving a round well for the filling. Trim a small slice away from the rounded sides of each pear half so that they will sit in the baking dish without wobbling. Toss the pears with some lemon juice to prevent them from turning brown. Arrange them, core side up, in a baking dish large enough to hold the pears snugly.",
        "Gently toss the crumbled blue cheese, dried cranberries, and walnuts together in a small bowl. Divide the mixture among the pears, mounding it on top of the indentation.",
        "In the same small bowl, combine the apple cider, port, and brown sugar, stirring to dissolve the sugar. Pour the mixture over and around the pears. Bake the pears, basting occasionally with the cider mixture, for 30 minutes, or until tender. Set aside until warm or at room temperature.",
        "Just before serving, whisk together the olive oil, 1/4 cup of lemon juice, and 1/4 cup of the basting liquid in a large bowl. Divide the arugula among 6 plates and top each with a pear half. Drizzle each pear with some of the basting liquid, sprinkle with salt, and serve warm.",
      ]
    },
    {
      image: '7.jpg',
      title: 'Baby Bok Choy With Cashews',
      intro: 'This Baby Bok Choy w/ Cashews recipe is a little more exciting than your average salad, and includes sesame oil, ginger, garlic and toasted cashews.',
      timeprep: '5',
      timecook: '10',
      yield:'6 servings',
      ingredients: [
        "2 Tbsp. olive oil",
        "1 cup chopped green onions, including green ends",
        "3 cloves garlic, chopped",
        "1/8 tsp. ground ginger",
        "1 pound baby bok choy, rinsed, larger leaves separated from base, base trimmed but still present, holding the smaller leaves together",
        "1/2 tsp. dark sesame oil",
        "salt and freshly ground black pepper",
        "1/2 cup chopped, roasted, salted cashews",
      ],
      directions: [
        "Heat olive oil in a large sauté pan on medium high heat. Add onions, garlic and ginger, stir together and cook for 1 minute. Then add bok choy. Sprinkle with sesame oil and a small pinch of salt. Cover, and let the baby bok choy cook down for approximately 3 minutes. (Like spinach, when cooked, the bok choy will wilt a bit.)",
        "Remove cover. Lower heat to low. Stir and let cook for a minute or two longer, until the bok choy is just cooked.",
        "Gently mix in cashews. Serve warm."
      ]
    },
    {
      image: '8.jpg',
      title: 'Penne Alla Vodka (Vodka Cream Pasta)',
      intro: 'This Penne Alla Vodka recipe is easy to make, full of rich flavors, and absolutely delicious! Feel free to add some roasted veggies and/or proteins into the dish if you\'d like.',
      timeprep: '5',
      timecook: '40',
      yield:'8 servings',
      ingredients: [
        "12 ounces dried penne pasta (or I used fettuccine)",
        "1 Tablespoon extra-virgin olive oil",
        "2 medium shallots or half a medium red onion, peeled and finely diced (about 2/3 cup)",
        "6 cloves garlic, peeled and minced",
        "1 cup vodka",
        "1 (28-ounce) can crushed tomatoes",
        "1/2 teaspoon crushed red pepper flakes*",
        "1/2 cup heavy cream",
        "1/2 cup torn or julienned fresh basil leaves, divided",
        "grated Parmesan cheese"
      ],
      directions: [
        "Heat a large stockpot of generously-salted water.  Once you reach step 5 below (adding in the heavy cream), add the pasta to the salted water and cook al dente according to package instructions.  Drain.",
        "Heat olive oil in a large saute pan over medium-high heat.  Add shallots (or red onion), and saute for 4-5 minutes until soft, stirring occasionally.  Add garlic and continue sauteing for 1-2 more minutes, or until the garlic is fragrant, stirring occasionally.",
        " Add vodka, and stir to combine.  Continue cooking until the sauce has reduced by half, about 3-5 minutes.",
        "Add the crushed tomatoes and crushed red pepper flakes, and stir to combine.  Continue cooking until the sauce reaches a simmer.  Then reduce heat to medium-low, and continue simmering for about 20-30 minutes, until the sauce has reduced by almost half.",
        "Stir in the heavy cream and half (1/4 cup) of the basil.  (<--This is also about the time you should begin cooking the pasta.)  Reduce heat to low and let the sauce continue to simmer until the pasta has cooked.",
        "Once the pasta is ready, return it to the stockpot and pour the sauce on top.  Toss the pasta until it is evenly coated with the sauce.",
        "Serve immediately, garnished with the extra basil and Parmesan cheese."
      ]
    },
    {
      image: '9.jpg',
      title: 'Gnocchi with Brussels Sprouts, Chicken Sausage and Kale Pesto',
      intro: 'This Gnocchi with Brussels Sprouts, Chicken Sausage and Kale Pesto recipe is quick and easy to make, so flavorful, and absolutely delicious!',
      timeprep: '5',
      timecook: '25',
      yield:'4-6 servings',
      ingredients: [
        "Gnocchi Ingredients:",
        "1 batch Kale Basil Pesto (see below)",
        "1 pound dry gnocchi (I used DeLallo Mini Potato Gnocchi, or you can use Gluten-Free Gnocchi)",
        "1 pound chicken sausage (I used a spicy Italian variety)",
        "1 Tablespoon olive oil",
        "1 pound brussels sprouts, trimmed and halved",
        "grated Parmesan cheese, for topping",
        "Kale Basil Pesto Ingredients:",
        "2 cups packed chopped kale leaves, stems removed",
        "1 cup packed basil leaves",
        "1/2 cup chopped walnuts, toasted",
        "1/2 cup grated Parmesan cheese",
        "1 teaspoon sea salt",
        "4 cloves garlic",
        "1/2 cup olive oil",
      ],
      directions: [
        "To Make The Gnocchi:",
        "Prepare Kale Basil Pesto according to instructions below.",
        "Cook the gnocchi in a large stockpot of salted boiling water according to package instructions.  Drain and set aside.",
        "While the gnocchi is cooking, cook the chicken sausage in a saute pan according to package instructions.  Once it has finished cooking, transfer the sausage to a separate plate and slice it on the diagonal into bite-sized pieces.",
        "In the same saute pan, heat olive oil over medium-high heat.  Add Brussels sprouts and saute for 5-6 minutes, stirring and flipping occasionally, until it is cooked through and begins to brown.  Remove from heat.",
        "Combine gnocchi, Brussels sprouts and Kale Basil Pesto in the stock pot, and toss until combined.  Serve warm, garnished with extra Parmesan cheese if desired.",
        "To Make The Kale Basil Pesto:",
        "Add kale, basil, walnuts, Parmesan, salt and garlic to a food processor, and pulse until combined.  Drizzle in the olive oil, while still pulsing the food processor, until the pesto is smooth.  Serve."
      ]
    },
    {
      image: '10.jpg',
      title: 'Italian Guacamole',
      intro: 'This Italian twist on guacamole is highlighted with lots of fresh basil and garlic.',
      timeprep: '5',
      timecook: '5',
      yield:'4 servings',
      ingredients: [
        "3 ripe avocados, peeled and pitted",
        "2 large cloves garlic, peeled and minced",
        "1 jalapeno, stem and seeds removed, finely chopped",
        "1 roma tomato, cored and finely chopped (or 3 tablespoons chopped sun-dried tomatoes)",
        "1/2 cup finely chopped red onion",
        "1 Tbsp. fresh lemon or lime juice",
        "1/4 cup fresh basil leaves, finely chopped",
        "1/2 tsp. coarse sea salt",
        "pinch of coarse black pepper"
      ],
      directions: [
        "Mash together all ingredients together with a fork until combined. Season with additional salt and pepper if needed.",
        "Serve immediately, or cover the bowl with plastic wrap (so that the plastic is literally touching the entire top layer of the guacamole) and refrigerate."
      ]
    }
  ];
  //  @ViewChild(NavController)
  constructor(public navCtrl: NavController) {

  }
  setContent(i: number) {
    this.navCtrl.push(DetailPage, { item: this.items[i] });
  }
}
