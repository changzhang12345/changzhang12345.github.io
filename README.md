# Chang Zhang · Robotics Portfolio

A dependency-free static portfolio designed for direct deployment to GitHub Pages.

## Local preview

Start any static file server in this directory and open `index.html`. Avoid opening the file directly, because some browsers restrict local video and JavaScript behavior.

## Deploy to GitHub Pages

1. Create a public repository named `<your-github-username>.github.io`.
2. Upload every file in this directory to the repository root.
3. In **Settings → Pages**, publish from the root of the `main` branch.
4. After GitHub finishes deploying, visit `https://<your-github-username>.github.io/`.

A regular repository name also works. In that case, the Pages URL will be `https://<username>.github.io/<repository-name>/`. All site paths are relative and support either option.

## Video assets

Videos live in `assets/videos/`. Keep the existing filenames when replacing a clip to avoid changing the page markup:

- `hero-ball-background.mp4` (homepage background; muted and accelerated, without a watermark)
- `ball-balance-100hz.mp4`
- `groove-following.mp4`
- `pi05-apple-to-pot.mp4`
- `pi05-eggplant-to-can.mp4`
- `pi05-wipe.mp4`
- `walker-c1-apple-pick-place.mp4`
- `ghrc-part-sorting-pi05.mp4`
- `bare-hand-dexterous-teleoperation.mp4`

The project-display videos are permanently muted, encoded at 1.25× speed, and carry a large, low-opacity `CHANG ZHANG` watermark at the center of the frame. The homepage background uses a separate muted, accelerated copy without a watermark because it is already obscured by the hero overlay. Original source footage remains unchanged.

## Editing

Content is in `index.html`, layout and responsive styling are in `styles.css`, and video switching plus scroll-reveal behavior are in `script.js`.
The hero portrait is stored at `assets/images/chang-zhang-portrait.jpg`.

## Before publishing

- Reconfirm the contribution boundaries in every project description.
- Keep internal code, configurations, and unpublished results out of the public repository.
