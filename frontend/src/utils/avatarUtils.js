// src/utils/avatarUtils.js

export function stringAvatar(name) {
    return {
        children: name
            .split(" ")
            .map((n) => n[0])
            .join(""),
        sx: {
            background: "#faa24b",
            color: "#03fcfc",
            fontWeight: "bold"
        }
    };
}