// https://api.github.com/users/npcwalison
import axios from 'axios';

const data = async () => {
    try {
        const response = await axios.get('https://api.github.com/users/npcwalison/repos')

        console.log(response.data);
    } catch(error) {
        console.log(error)
    }
}