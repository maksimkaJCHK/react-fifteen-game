# React fifteen game

English | [Русский](./README.ru.md) 

When I was just starting to work on frontend. I had a friend, a very good PHP programmer. His child was autistic. And one day the child drew him pictures of spaceships and asked him to make a game out of them. And the most interesting thing is that Vanya made a game, it turned out like the good old game on "dendy" "galaxian". Usually PHP programmers know javascript at a minimum level (make an AJAX request, get an element by ID). But Vanya was not like that, he was a programmer from God, I learned a lot from him. At that time, I could not make a game like Vanya, I worked with jQuery, and when you work with jQuery you can write plugins on it, make cool animation, and at the same time you don’t necessarily need to know javascript well. A lot of time passed and I also had a desire to do something similar. As a child, I had a favorite game of fifteen, and I decided to make it. It doesn’t need pictures, and the logic is quite simple in concept. You can see what came out of it [here](https://maksimkajchk.github.io/react-fifteen-game/).

If you click on the top left icon, the settings will open, where you can choose the size of the fifteen 3X3, 4X4 or 5X5. If you enter the game for the first time, the settings will open by default. And then the game will load. You need to collect the fifteen in order.

If you have chosen the 3X3 size of the fifteen, then you need to collect the fifteen in the following order - 1, 2, 3, 4, 5, 6, 7, 8. 

If you have chosen the 4X4 size of the fifteen, then you need to assemble the fifteen in the following order - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15.

If you have chosen the size of fifteen 5X5, then you need to collect fifteen in the following order - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24.

You can move either one or two tags at a time. To move tags, you must click on any tag that is on the same horizontal or vertical level with an empty cell. If you close the game, the default settings will be saved. When you reopen the game, you will start from where you left off. To start a new game, click the "New game" button; to start the game from the beginning, click the "Reload game" button. To make the game more interesting, I count the number of moves. Moving two tags is considered one move. If the spot or spots are or are in the right place, they will change color to a darker one.

This game is made using "react.js", I used "Bootswatch (darkly)" as a theme (I only took the colors from there). The game is designed for mobile phones, at least 320px fits everything. In order not to pass props to each component I use "context". For children you can choose 3X3 fifteen, for an ordinary person 4X4 fifteen will do, I don't see the point in making more than 5X5 fifteen.