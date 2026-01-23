<script>
  const track = document.querySelector(".carousel-track");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;
  const cardWidth = 330; // card width + gap

  nextBtn.addEventListener("click", () => {
    if (index < track.children.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });
</script>
