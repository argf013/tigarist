const snowy = document.getElementById('snowy');
const loop = () => {
    for (let i = 0; i < 10; i++) {
      snowy.innerHTML += `<div class="snowflake">
      ❅
      </div>`;
    }
  };
  // memanggil fungsi loop
export default loop;