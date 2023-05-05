# Tinybird + Tremor eCommerce Analytics

This repo is a demo application showing you how to build an eCommerce analytics dashboard using [Tinybird](https://tinybird.co) and [Tremor](https://tremor.so).

You can find the live stream for this demo [here](https://www.youtube.com/watch?v=pRXuphQk-2Y).

## Running the demo

1. [Create a Tinybird account](https://www.tinybird.co/docs/index.html#creating-your-account)
2. Copy your [Auth Token](https://www.tinybird.co/docs/concepts/auth-tokens.html) from your empty Tinybird Workspace
3. Clone this repo
4. Inside the repo folder, go to the `tinybird` folder and create a new virtual python environment `python3.11 -m venv .venv`
5. Activate the Python virtual environment `source .venv/bin/activate`
6. Install the Tinybird CLI `pip install tinybird-cli`
7. Authenticate the Tinybird CLI `tb auth` and paste your Auth Token when asked
8. Push the Tinybird resources to Tinybird `tb push`
9. Go back to the main repo folder, then enter the `dashboard` folder
10. Create a `.env.local` file, and use the following template:
```
NEXT_PUBLIC_TINYBIRD_TOKEN=<my token>
```
11. Replace the `<my_token>` string with the Auth Token you copied earlier, save the file
12. Install the npm dependencies `npm install`
13. Run the development server `npm run dev`
14. You should now have a functional dashboard, but you won't have any data
15. To generate fake data, use [Mockingbird](https://mockingbird.tinybird.co)
16. Select the Tinybird Destination
17. Enter your Auth Token into the Auth Token box
18. Set the Data Source name to `sales_events`
19. Click Continue
20. Copy the contents of the [`sales_event.json`](./mockingbird/sales_events.json) files, and paste it into the Schema box in Mockingbird
21. Click Start Generating
22. You should now get mock data arriving in Tinybird, and your dashboard should start to populate