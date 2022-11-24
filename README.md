# Programming challenge for Inploi by Georgi Petkov.

The app is deployed at [https://inploi-programming-challenge.vercel.app/](https://inploi-programming-challenge.vercel.app/)

<br>

## Run instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

## Page explanation

1. Index
   - Entry point for the website which presents the user with a search field
     to search for jobs.
   - When they submit their search query, that redirects them to the job results page.
2. Job results page
   - Presents user with a list of all jobs that match the description they've entered on
     the previous page.
   - Can see basic information and expand the accordion to view more information or go to
     the job specification page.
   - User can refine their initial query which also updates the list of jobs in real time.
3. Job details page
   - Shows relevant information for the specified job.
   - The page forwards you to apply to the selected job at the company webpage (if it exists).
