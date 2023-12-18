function tellStory(storyNiza){
    let [ime, mood, activity] = storyNiza
    let story = `This is ${ime}. ${ime} is a nice person. Today they are ${mood}. They are ${activity} all day. The End.`
    document.write(story)
}
let storyNiza=["Marko", "happy", "coding"];
tellStory(storyNiza)