export const ableToMove = (pos, direction, step, playground) => {
    const newPos = { x: pos.x, y: pos.y };

    switch (direction) {
        case 'up':
            newPos.y -= step;
            break;

        case 'down':
            newPos.y += step;
            break;

        case 'right':
            newPos.x += step;
            break;

        case 'left':
            newPos.x -= step;
            break;

        default:
            return undefined;
    }

    return !playground[newPos.y][newPos.x].includes(-1);
}