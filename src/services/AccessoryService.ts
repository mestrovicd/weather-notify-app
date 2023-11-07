export function getAccessoryMessage(condition: string): string {
    switch (condition) {
        case "rain":
            return "Umbrella";
        case "clear":
            return "Sunglasses";
        case "wind":
            return "Windcoat";
        default:
            return "";
    }
}
