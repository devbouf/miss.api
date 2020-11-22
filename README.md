![Discord Server](https://discord.gg/RPb2KXN)
![API Site](http://miss.glitch.me)
![Npm](https://www.npmjs.com/package/missapi)
# miss.api

## Installation
```
> npm install missapi

> yarn add missapi
```
### Content
| Animals    | NSFW-Anime  | NSFW-Real    | SFW    | Other   | Reactions |
|------------|-------------|--------------|--------|---------|-----------|
| `cat`      | `hentai`    | `porn`       | `hug`  | `meme`  | `angry`   |
| `dog`      | `hentaigif` | `real_ass`   | `kiss` |         | `dance`   |
| `koal`     | `ass`       | `real_pussy` | `cry`  |         |           |
| `fox`      | `pussy`     | `real_boobs` | `kill` |         |           |
| `pand`     | `boobs`     |              | `sex`  |         |           |
| `snake`    |             |              | `view` |         |           |
| `squirrel` |
| `turtle`   |
| `wolf`     |
| `giraffe`  |

## Examples
```js
const image = await require("missapi")('/v2/cat')

let Embed = new Discord.MessageEmbed()
.setTitle(`Cat!`)
.setImage(image)
.setColor(`#9ee7da`)
message.channel.send(Embed)
console.log(image)
```
Returns:
"https://cdn.discordapp.com/attachments/673255125908848673/678578329305219112/d2933e70f6cc2673.jpg"

- This api was just created, in the future it will improve!

- Данное апи только было создано, в дальнейшем оно будет улучшаться!
