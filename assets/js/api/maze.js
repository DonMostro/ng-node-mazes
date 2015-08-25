    var mazeGenerator = function () {
        var maze = [],
            pillarCoords = {
                row: [4, 8, 16, 20],
                col: [3, 6, 9, 12]
            },
            doors = [
                [0, 7],
                [0, 8],
                [12, 7],
                [12, 8],
                [17, 15],
                [18, 15],
                [19, 15]
            ],
            dirs = {
                left: [{
                    row: 0,
                    col: -1
                }, {
                    row: 0,
                    col: -2
                }],
                up: [{
                    row: -1,
                    col: 0
                }, {
                    row: -2,
                    col: 0
                }, {
                    row: -3,
                    col: 0
                }],
                right: [{
                    row: 0,
                    col: 1
                }, {
                    row: 0,
                    col: 2
                }],
                down: [{
                    row: 1,
                    col: 0
                }, {
                    row: 2,
                    col: 0
                }, {
                    row: 3,
                    col: 0
                }]
            },
            row,
            cells,
            border,
            col;

        for (row = 0; row < 25; row += 1) {
            cells = [];
            maze.push(cells);
            for (col = 0; col < 16; col += 1) {
                border = row === 0 || row === 24 || row === 12 || col === 0 || col === 15;
                cells.push(border ? 1 : 0);
            }
        }

        angular.forEach(doors, function (door) {
            maze[door[0]][door[1]] = 0;
        });

        function getDirection(seed) {
            if (seed < 0.25) return dirs.left;
            if (seed < 0.5) return dirs.up;
            if (seed < 0.75) return dirs.right;
            return dirs.down;
        }

        angular.forEach(pillarCoords.row, function (pillarRow) {
            angular.forEach(pillarCoords.col, function (pillarCol) {
                var x = 0,
                    dir, rand = Math.random();
                maze[pillarRow][pillarCol] = 2;
                while (x < 10) {
                    x += 1;
                    dir = getDirection(rand);
                    if (maze[pillarRow + dir[0].row][pillarCol + dir[0].col] === 1) {
                        continue;
                    }
                    angular.forEach(dir, function (offset) {
                        maze[pillarRow + offset.row][pillarCol + offset.col] = 1;
                    });
                    break;
                }
            });
        });

        return maze;
    };

    function MazeController() {}

    angular.extend(MazeController.prototype, {
        maze: mazeGenerator(),
        newMaze: function () {
            this.maze = mazeGenerator();
        }
    });
