import { Component } from './component.js';

export function generateTable(posts) {
  const wrapper = document.querySelector('.wrapper');
  const table = new Component({ tag: 'table' });
  const tableHead = new Component({ tag: 'thead' });
  const headerRow = new Component({ tag: 'tr' });

  const emptyHeader = new Component({ tag: 'th', text: '' });
  headerRow.append(emptyHeader);

  const headers = ['userId', 'title', 'body'];
  headers.forEach((header) => {
    const th = new Component({ tag: 'th', text: header });
    headerRow.append(th);
  });

  tableHead.append(headerRow);
  table.append(tableHead);

  const tableBody = new Component({ tag: 'tbody' });

  posts.forEach((post) => {
    const row = new Component({ tag: 'tr', className: 'row' });

    const rowHeader = new Component({ tag: 'th', text: post.id });
    row.append(rowHeader);

    const cellsData = [post.userId, post.title, post.body];
    cellsData.forEach((cellData) => {
      const cell = new Component({ tag: 'td', text: cellData });
      row.append(cell);
    });

    tableBody.append(row);
  });

  table.append(tableBody);
  wrapper.appendChild(table.getNode());
}
