let ranks = {
  "rubedo": {
    rank: 'A-1',
    kills: '700-800',
    user: 'Robytyry',
    chars: ['Atomic', 'Saitama', 'Genos']
  },
  "stormcaller": {
    rank: 'B-1',
    kills: '200-300',
    user: 'Davkoagent',
    chars: ['Sonic', 'Garou']
  },
  "strongest nugget": {
    rank: 'D-1',
    kills: '300-400',
    user: 'Omerokhoseso_team',
    chars: ['Garou', 'Saitama']
  },
  "foolish destroyer": {
    rank: 'A-2',
    kills: '2400-2500',
    user: 'Unknown',
    chars: ['Garou', 'Saitama', 'Atomic']
  },
}

function search(t) {
  for (let i of document.getElementById('rs').children) {
    if (i.textContent.includes(t.toLowerCase())) {
      i.style.display = 'block'
    } else {
      i.style.display = 'none'
    }
  }
}

function info(t) {
  if (t in ranks) {
    document.getElementById('n').textContent = "Nickname: " + t
    document.getElementById('un').textContent = "Username: " + ranks[t].user
    document.getElementById('r').textContent = "Class-Rank: " + ranks[t].rank
    document.getElementById('k').textContent = "Kills: " + ranks[t].kills
    document.getElementById('k').textContent = "Characters: " + ranks[t].chars
  }
}

window.onload = function() {
  for (let i in ranks) {
    let n = document.createElement('li')
    n.textContent = i
    document.getElementById('rs').appendChild(n)
  }
}
