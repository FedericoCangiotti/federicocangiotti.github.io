function CopyDiscordTag() {
    navigator.clipboard.writeText("FedeCangio#0362").then(
        () => {
            alert(
                "Hai copiato il mio tag Discord, contattami su:\ndiscord.com"
            );
            console.log("Tag discord copiato con successo");
        },
        () => {
            console.log("Copying error");
        }
    );
}
