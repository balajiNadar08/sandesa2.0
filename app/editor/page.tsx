"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function EditorPage() {
  const [brand, setBrand] = useState("SANDESA");
  const [headline, setHeadline] = useState(
    "Bahrain GP relocated to Malaysia due to the Middle East conflict,",
  );
  const [description, setDescription] = useState(
    "with the race set to take place at Sepang International Circuit instead of Bahrain.",
  );
  const [source, setSource] = useState("Sky Sports F1");
  const [uploadedImage, setUploadedImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (uploadedImage) URL.revokeObjectURL(uploadedImage);
    };
  }, [uploadedImage]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("Please select a valid image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setImageError("Image size must be less than 10 MB.");
      return;
    }

    setImageError("");
    setImageName(file.name);
    setUploadedImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setUploadedImage("");
    setImageName("");
    setImageError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      {/* Header */}
      <header className="mx-auto mb-8 flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Sandesa <span className="text-cyan-300">2.0</span>
        </Link>

        <span className="text-sm text-white/50">Poster Editor</span>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-12">
        {/* Editor Controls */}
        <section className="space-y-6">
          {/* <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create your story.
            </h1>
            <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">
              Edit your content and see your Instagram poster update live.
            </p>
          </div> */}

          {/* Publication name */}
          <div className="space-y-2">
            <label
              htmlFor="brand"
              className="text-sm font-medium text-white/80"
            >
              Publication name
            </label>
            <input
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              maxLength={40}
              placeholder="SANDESA"
              className="w-full border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300"
            />
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <label
              htmlFor="headline"
              className="text-sm font-medium text-white/80"
            >
              Headline
            </label>
            <textarea
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              maxLength={300}
              rows={4}
              placeholder="Enter your news headline..."
              className="w-full resize-y border border-white/15 bg-white/5 px-4 py-3 leading-6 outline-none transition focus:border-cyan-300"
            />
            <p className="text-right text-xs text-white/40">
              {headline.length}/300
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-white/80"
            >
              Supporting text
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={500}
              rows={4}
              placeholder="Add more details about the news..."
              className="w-full resize-y border border-white/15 bg-white/5 px-4 py-3 leading-6 outline-none transition focus:border-cyan-300"
            />
            <p className="text-right text-xs text-white/40">
              {description.length}/500
            </p>
          </div>

          {/* Source */}
          <div className="space-y-2">
            <label
              htmlFor="source"
              className="text-sm font-medium text-white/80"
            >
              News source
            </label>
            <input
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              maxLength={100}
              placeholder="e.g. Sky Sports F1"
              className="w-full border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300"
            />
          </div>

          {/* Image upload */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              News image
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={handleImageUpload}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full items-center justify-center gap-3 border border-dashed border-white/25 bg-white/5 px-4 py-6 text-sm transition hover:border-cyan-300 hover:bg-white/10"
            >
              <span className="text-xl">↑</span>
              <span>
                <span className="block font-medium">
                  {uploadedImage ? "Change image" : "Upload news image"}
                </span>
                <span className="mt-1 block text-xs text-white/45">
                  PNG, JPG or WebP · Max 10 MB
                </span>
              </span>
            </button>

            {imageError && (
              <p role="alert" className="text-sm text-red-400">
                {imageError}
              </p>
            )}

            {imageName && (
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="truncate text-white/60">{imageName}</span>
                <button
                  type="button"
                  onClick={removeImage}
                  className="shrink-0 text-red-300 hover:text-red-200"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <p className="text-xs leading-5 text-white/40">
            The preview updates automatically. Your uploaded image stays in this
            browser session; it is not saved to a database.
          </p>
        </section>

        {/* Poster Preview */}
        <section className="min-w-0">
          <div className="mx-auto mb-4 flex max-w-[540px] items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-white/80">
              LIVE PREVIEW
            </h2>
            <span className="text-xs text-white/40">
              Instagram · 1080 × 1350
            </span>
          </div>

          {/* Fixed 4:5 poster canvas */}
          <div
            className="relative mx-auto w-full max-w-[540px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{
              aspectRatio: "1080 / 1350",
              backgroundImage: "url('/grainy-blue-bg.png')",
            }}
          >
            <div className="flex h-full flex-col px-[6.5%] pb-[4.5%] pt-[9%]">
              {/* Brand */}
              <div className="mb-[10%] text-center">
                <p className="break-words font-serif text-[clamp(1.3rem,4.8vw,3.5rem)] font-bold leading-tight tracking-tight text-white">
                  {brand || "SANDESA"}
                </p>
              </div>

              {/* Headline and supporting text */}
              <div className="mb-[8%]">
                <h2 className="whitespace-pre-wrap break-words text-[clamp(1.15rem,3.9vw,2.6rem)] font-bold leading-[1.2] tracking-[-0.025em] text-white">
                  {headline || "Your headline goes here"}
                </h2>

                {description && (
                  <p className="mt-[2.5%] whitespace-pre-wrap break-words text-[clamp(0.95rem,3.1vw,2rem)] font-normal leading-[1.4] tracking-[-0.015em] text-white/95">
                    {description}
                  </p>
                )}
              </div>

              {/* News image */}
              <div className="relative mt-auto aspect-[2.4/1] w-full shrink-0 overflow-hidden rounded-[3%] bg-black/30">
                {uploadedImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={uploadedImage}
                    alt="Uploaded news"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-white/60">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    <span className="text-xs sm:text-sm">
                      Upload an image to preview
                    </span>
                  </div>
                )}
              </div>

              {/* Source and arrow at the bottom */}
              <div className="mt-[5%] flex min-w-0 items-center justify-between gap-3">
                <p className="min-w-0 break-words text-[clamp(0.8rem,2.7vw,1.65rem)] leading-tight text-white">
                  Source: {source || "News source"}
                </p>

                <div
                  className="flex h-[clamp(2rem,7.5vw,4rem)] w-[clamp(4rem,21vw,8.5rem)] shrink-0 items-center justify-center rounded-full border-[clamp(2px,0.35vw,3px)] border-white"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 80 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[72%]"
                  >
                    <path d="M3 12h70M63 3l10 9-10 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-[540px] text-center text-xs leading-5 text-white/40">
            Portrait format · 4:5 ratio · Ready for Instagram feed layout
          </p>
        </section>
      </div>
    </main>
  );
}
