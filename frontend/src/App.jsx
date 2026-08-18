import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Django CMS
      </button>

      {open && (
        <div>
          <h2>Django CMS</h2>
          <p>
            Djangoを使って構築したCMS。
            管理画面からPortfolioを登録・編集できます。
          </p>
          <p>Python / Django / SQLite / React</p>

          <button onClick={() => setOpen(false)}>
            閉じる
          </button>
        </div>
      )}
    </div>
  );
}

export default App;