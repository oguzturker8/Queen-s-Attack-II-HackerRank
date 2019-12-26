// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
  let x = c_q,
    y = r_q,
    total,
    del = 0,
    mid,
    rank,

  if (n % 2 === 0) {
    mid = (n + 1) / 2;
    rank = Math.max(
      Math.floor(Math.abs(x - mid)),
      Math.floor(Math.abs(y - mid))
    );
    total = (n / 2 - 1) * 4 + 1 - rank * 2 + (n - 1) * 2;
  } else {
    mid = (n + 1) / 2;
    rank = Math.max(Math.abs(x - mid), Math.abs(y - mid));
    total = (n - 1) * 2 - rank * 2 + (n - 1) * 2;
  }

  let xEyB = n + 1,
    xEyK = 0,
    xKyE = 0,
    xByE = n + 1,
    xKyKx = 0,
    xKyKy = 0,
    xKyBx = 0,
    xKyBy = n + 1,
    xByKx = n + 1,
    xByKy = 0,
    xByBx = n + 1,
    xByBy = n + 1;
  obstacles.forEach(obs => {
    // obs[1]=x, obs[0]=y;
    if (obs[1] === x && obs[0] > y) xEyB = obs[0] < xEyB ? obs[0] : xEyB;
    else if (obs[1] === x && obs[0] < y) xEyK = obs[0] > xEyK ? obs[0] : xEyK;
    else if (obs[0] === y && obs[1] < x) xKyE = obs[1] > xKyE ? obs[1] : xKyE;
    else if (obs[0] === y && obs[1] > x) xByE = obs[1] < xByE ? obs[1] : xByE;
    else if (Math.abs(obs[0] - y) === Math.abs(obs[1] - x)) {
      if (obs[1] < x && obs[0] < y) {
        if (obs[1] > xKyKx && obs[0] > xKyKy) {
          xKyKx = obs[1];
          xKyKy = obs[0];
        }
      } else if (obs[1] < x && obs[0] > y) {
        if (obs[1] > xKyBx && obs[0] < xKyBy) {
          xKyBx = obs[1];
          xKyBy = obs[0];
        }
      } else if (obs[1] > x && obs[0] < y) {
        if (obs[1] < xByKx && obs[0] > xByKy) {
          xByKx = obs[1];
          xByKy = obs[0];
        }
      } else if (obs[1] > x && obs[0] > y) {
        if (obs[1] < xByBx && obs[0] < xByBy) {
          xByBx = obs[1];
          xByBy = obs[0];
        }
      }
    }
  });

  del += xEyB < n + 1 ? n - xEyB + 1 : 0;
  del += xEyK > 0 ? xEyK : 0;
  del += xByE < n + 1 ? n - xByE + 1 : 0;
  del += xKyE < n + 1 ? xKyE : 0;
  del += xKyKx > 0 && xKyKy > 0 ? Math.min(xKyKx, xKyKy) : 0;
  del += xKyBx > 0 && xKyBy < n + 1 ? Math.min(xKyBx, n - xKyBy + 1) : 0;
  del += xByKx < n + 1 && xByKy > 0 ? Math.min(n - xByKx + 1, xByKy) : 0;
  del +=
    xByBx < n + 1 && xByBy < n + 1 ? Math.min(n - xByBx + 1, n - xByBy + 1) : 0;
  return total - del;

}
