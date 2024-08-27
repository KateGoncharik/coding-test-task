import { Component } from '../../../component.js';
import { createSearch } from './search.js';

export const createTable = (posts) => {
  const wrapper = document.querySelector('.wrapper');
  const table = new Component({ tag: 'table' });
  const tableHead = new Component({ tag: 'thead' });
  const headerRow = new Component({ tag: 'tr' });

  const emptyHeader = new Component({ tag: 'th', text: '' });
  headerRow.append(emptyHeader);

  const headers = ['userId', 'title', 'body'];

  let sortDirection = 'asc';

  headers.forEach((header) => {
    const th = new Component({ tag: 'th', text: header });
    th.addListener('click', () => sortTable(posts, sortDirection, header));
    headerRow.append(th);
  });

  tableHead.append(headerRow);
  table.append(tableHead);

  const tableBody = new Component({ tag: 'tbody', className: 'table-body' });

  table.append(tableBody);
  wrapper.append(createSearch().getNode());
  wrapper.appendChild(table.getNode());
  renderTableData(posts);
};

const sortTable = (posts, sortDirection, sortingKey) => {
  const sortedPosts = [...posts].sort((a, b) => {
    const order = sortDirection === 'asc' ? 1 : -1;
    return a[sortingKey] > b[sortingKey] ? order : -order;
  });

  sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';

  renderTableData(sortedPosts);
};

export const renderTableData = (sortedPosts) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  sortedPosts.forEach((post) => {
    const row = new Component({ tag: 'tr', className: 'row' });

    const rowHeader = new Component({ tag: 'th', text: post.id });
    row.append(rowHeader);

    const cellsData = [post.userId, post.title, post.body];
    cellsData.forEach((cellData) => {
      const cell = new Component({ tag: 'td', text: cellData });
      row.append(cell);
    });

    tableBody.append(row.getNode());
  });
};
