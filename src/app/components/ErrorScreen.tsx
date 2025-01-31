"use client";
export default function ErrorScreen() {
  return (
    <article className="min-h-screen flex items-center justify-center text-[rgba(255,255,255,0.8)] bg-[#1B1E28]">
      <form
        className=""
        onSubmit={(e: any) => {
          e.preventDefault();
          window.location.href = `/?token=${e.target.token.value}`;
        }}
      >
        <input
          type="text"
          name="token"
          id="token"
          required
          minLength={10}
          className="bg-transparent p-3 rounded-lg border border-[rgba(255,255,255,0.6)] mb-2"
        />
        <button className="ml-2">Search</button>
      </form>
    </article>
  );
}
