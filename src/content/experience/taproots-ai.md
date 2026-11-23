> A computer vision tool that helps tennis players improve their shots by comparing them with how the best players in the world play the same shot. I built the analysis pipeline and backend modules and delivered a working proof of concept.

## The idea

Players and coaches review match video to find what to fix, but watching hours of footage and spotting subtle technique issues by eye is slow.

We wanted to automate that by comparing each of a player's shots against how top professionals play the same shot, then surfacing where the technique differs. The tool was built for **both players and coaches**.

## First attempt: comparing images

Our first approach compared video frames directly against reference frames of professional players. We evaluated three image-similarity methods:

- **Cosine Similarity**
- **SSIM** (Structural Similarity Index)
- **ORB** feature matching

None of them held up. Comparing whole images picked up too much noise, and players play in **different surroundings**: different courts, backgrounds, lighting and camera angles. Pixel-level comparison ends up measuring how similar the scenes look rather than how similar the shots are.

## What worked: comparing posture and the ball

So we stopped comparing pixels and started comparing **what the player's body and racquet are actually doing**:

1. **Body posture.** Using **MediaPipe**, we detect the player's body keypoints in each frame and calculate the **angles between joints**. Those angles describe the shape of a shot regardless of the background.
2. **Ball and racquet.** Using **OpenCV**, we detect the **ball position** and the **center of the racquet**, which shows where contact happens relative to the body.
3. **Comparison.** These data points are compared against the same measurements from professional players playing the same shot, and the shot is classified.

Because these features describe the player rather than the scene, the comparison works no matter where the match was filmed.

## What players and coaches get

The pipeline turns a match video into practical stats, such as:

- **How many shots in a set could have been played better.**
- **The timestamp** of each of those shots, so they're easy to find in the video.
- **A snapshot of the exact moment** with an explanation of what differed from the reference technique.

## My role

I built the video processing pipeline and the backend modules for model inference, and implemented the posture detection and shot classification. The result was a **working proof of concept**.

<!-- TODO(Aditya): an example of a typical "could've been played better" finding, e.g. "elbow angle at contact was X° vs Y° for the pro reference". -->
