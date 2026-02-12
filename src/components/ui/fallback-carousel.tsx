import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  images: string[];
  delay?: number;
  alt?: string;
}

export default function FallbackCarousel({ images, delay = 2000, alt }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), delay);
    return () => clearInterval(id);
  }, [images, delay]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[idx]}
        alt={alt ?? `slide ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
        loading="lazy"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </>
      )}
    </div>
  );
}
