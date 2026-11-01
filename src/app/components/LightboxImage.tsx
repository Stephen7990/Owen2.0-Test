import { useEffect, useRef, useState } from 'react';

type LightboxImageProps = {
  src: string;
  alt: string;
  className: string;
};

function PhotoLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={alt}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          dialogRef.current?.close();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      className="m-0 h-screen max-h-none w-screen max-w-none border-0 bg-black/90 p-6 text-white backdrop:bg-black/80"
    >
      <div className="flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close photo"
          className="absolute right-5 top-5 z-10 border border-primary/60 bg-background/90 px-4 py-2 font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-background"
        >
          Close
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </dialog>
  );
}

export function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open photo: ${alt}`}
        className="relative block h-full w-full cursor-zoom-in overflow-hidden"
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-80 blur-xl"
        />
        <div className="absolute inset-0 bg-background/25" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`relative z-10 ${className}`}
        />
      </button>
      {isOpen && (
        <PhotoLightbox src={src} alt={alt} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
