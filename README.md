  # Andimta

A companion to your bible study. [`Link`](https://andimta.netlify.app).
<br>
![Andimta Screeshot](https://i.ibb.co/zFBQYrB/image-2023-09-28-09-36-50.png)

## To get it up and running

Clone the project and install dependancies
```bash
# clone the repo
git clone https://github.com/henacodes/andimta-public.git

# go to the folder and install dependancies
cd andimta-public
npm install
```

## Environment Variables

BIBLE_API_URL = https://bolls.life
PUBLIC_MAKESUIT_API_KEY = <Your_API_KEY>


I used googles Makersuit API for church fathers an quiz features. so register [here](https://makersuite.google.com) and you will get access to it 2 or 3 days later.
IF you can't get access to it, dm me on telegram [here](https://t.me/henacodes).

After you create a new API KEY, assign it to `PUBLIC_MAKESUIT_API_KEY` variable

## finally 

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


