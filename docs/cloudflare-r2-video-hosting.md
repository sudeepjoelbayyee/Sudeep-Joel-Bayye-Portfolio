# Cloudflare R2 video hosting

This portfolio uses Cloudflare R2 for the 24 self-hosted MP4 projects. The
three JGI YouTube projects remain YouTube embeds and do not need to be uploaded
to R2.

## Object naming

Upload the original MP4 files from `public/videos/` into an R2 bucket under
the `videos/` prefix, preserving each filename exactly. For example:

`public/videos/st-reel-1.mp4` -> `videos/st-reel-1.mp4`

The app builds direct video URLs as:

`<VITE_R2_PUBLIC_URL>/videos/<filename>`

## 1. Create the bucket

1. Open Cloudflare Dashboard -> Storage & databases -> R2.
2. Create a bucket, for example `portfolio-videos`.
3. Keep the bucket in the Standard storage class.
4. Create a `videos/` prefix (folder) in the bucket.

## 2. Upload the original video files

Upload all 24 original MP4 files from your local `public/videos/` folder into
the R2 `videos/` prefix. You can drag and drop the files into the Cloudflare
R2 dashboard.

Important: this Git repository tracks MP4s using Git LFS. GitHub's normal file
view may show small Git LFS pointer text files rather than the actual video
contents. Upload the real local MP4 files, not 132-byte Git LFS pointer files.
If the local files are pointers, run `git lfs pull` in the project first and
confirm their sizes before uploading.

Do not remove `public/videos/` yet. Keep it as the local development fallback
until every R2 object has been checked and the deployed site plays correctly.

## 3. Enable public read access

These portfolio videos are intended to be watchable by anyone who visits the
public portfolio. In the bucket settings, connect a custom domain such as
`media.yourdomain.com` under Public access -> Custom Domains. This gives the
bucket a stable HTTPS base URL and supports Cloudflare caching.

Cloudflare's `r2.dev` address can be used for initial testing, but Cloudflare
documents it as a development endpoint, not a production delivery endpoint.
For the final portfolio, use a custom domain you control.

## 4. Configure CORS

In the R2 bucket settings, add a CORS policy. Replace the example Netlify
hostname with the exact deployed portfolio origin. Keep localhost for local
development.

```json
[
  {
    "AllowedOrigins": [
      "https://YOUR-SITE.netlify.app",
      "http://localhost:5173"
    ],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["Range"],
    "ExposeHeaders": [
      "Accept-Ranges",
      "Content-Length",
      "Content-Range",
      "Content-Type",
      "ETag"
    ],
    "MaxAgeSeconds": 3600
  }
]
```

This is the JSON format used by the R2 dashboard CORS editor. Add your exact
production portfolio origin (and any custom portfolio domain) to
`AllowedOrigins`. Origins must contain only scheme + hostname + optional
port, with no trailing slash or path. If the browser reports a CORS error,
check the blocked request's Origin and request headers in DevTools.

If you use a custom portfolio domain, add that exact origin too. An origin is
only scheme + hostname (+ optional port), with no path and no trailing slash.

## 5. Configure the website URL

For local development, copy `.env.example` to `.env.local` and set:

```dotenv
VITE_R2_PUBLIC_URL=https://media.yourdomain.com
```

In Netlify, open Site configuration -> Environment variables and add the same
`VITE_R2_PUBLIC_URL` value for the production deploy context (and deploy
previews too, if you use them). Then trigger a new deploy.

This variable is a public asset URL. Do not put an R2 access key, secret key,
Cloudflare API token, or account credentials in any `VITE_*` variable or
frontend code. Upload credentials must remain on your own machine and must
never be committed.

## 6. Verify before cleanup

Test a known object URL directly, for example:

`https://media.yourdomain.com/videos/st-reel-1.mp4`

Then open the portfolio and test several MP4s, including vertical and
horizontal videos, plus all three YouTube embeds. Confirm playback on desktop
and mobile and inspect the browser Network panel to ensure MP4 requests go to
the R2 domain only after a project is opened.

Only after all checks pass should you remove the tracked local MP4s from the
repository. Keep your local originals backed up. The `.output/` directory is
generated build output; it is ignored for future work and should not be used as
the source of video files.

## Billing note

Cloudflare R2's published free tier includes 10 GB-month of Standard storage,
1 million Class A operations and 10 million Class B operations per month;
internet egress is free. Usage above the free allowance is billed. Check the
current R2 pricing before relying on a zero-cost target:
https://developers.cloudflare.com/r2/pricing/
