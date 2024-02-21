<template>
  <div id="list-container">
    <div class="flex items-center justify-between h-12 mx-8">
      <div>
        <span class="text-sm font-medium text-gray-700">
          Showing {{ pageInfo.currentPage }} of {{ pageInfo.totalPage }} pages
        </span>
      </div>
      <div class="inline-flex">
        <a v-if="pageInfo.prevButton.status"
          :href="pageInfo.prevButton.href"
          class="hover:bg-gray-300 w-16 px-3 py-1 text-right text-gray-800 bg-gray-200 rounded-l">
          Prev
        </a>
        <div v-else class=" w-16 px-3 py-1 text-gray-400 bg-gray-200 border border-r-0 rounded-l">
          Prev
        </div>
        <template v-for="item in pageInfo.pageButtons" :key="item.num">
          <template v-if="item.status == 'disable'">
            <div class="w-12 px-3 py-1 text-center text-gray-800 bg-gray-200 border">
              {{ item.num }}
            </div>
          </template>
          <template v-else-if="item.status == 'active'">
            <a :href="item.link" class="hover:bg-blue-300 w-12 px-3 py-1 text-center text-gray-800 bg-blue-200 border">
              {{ item.num }}
            </a>
          </template>
          <template v-else>
            <div class="w-12 px-3 py-1 font-bold text-center text-gray-800 bg-blue-200 border">
              {{ item.num }}
            </div>
          </template>
        </template>
        <a v-if="pageInfo.nextButton.status"
          :href="pageInfo.nextButton.href"
          class="hover:bg-gray-300 w-16 px-3 py-1 text-left text-gray-800 bg-gray-200 rounded-r">
          Next
        </a>
        <div v-else class="w-16 px-3 py-1 text-gray-400 bg-gray-200 border border-r-0 rounded-l">
          Next
        </div>

      </div>
    </div>

    <table id="ddd" class="w-full">
      <thead class="bg-primary h-12 border-t">
        <tr>
          <th class="text-centerp-2 w-12">Id</th>
          <!-- 3rem width -->
          <th class="flex-grow p-2 text-left">Todo</th>
          <th class="w-32 p-2 text-center">Action</th>
          <!-- 5rem width -->
        </tr>
      </thead>
      <tbody>
        <Todo v-for="todo in todoStore.todosPage" :key="todo.id" :todo="todo" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { todoStore } from '@/store/store.js';
import { onBeforeMount, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Todo from '@/pages/todosv/todo.vue';

// const currentPage = ref(1);
// const totalPage = reactive(1);
// const pageButtons = ref([]);
// const prevButton = ref({ status: true, href: '' });
// const nextButton = ref({ status: false, href: '' });
const pageInfo = reactive({
  currentPage: 1,
  totalPage: 1,
  pageButtons: [],
  prevButton: { status: true, href: '' },
  nextButton: { status: false, href: '' }
});


const getTodo = async () => {
  const size = 10;
  const route = useRoute();
  let page = route.query?.page || 1;
  page = Math.max(1, page);
  let categoryid = route.query?.categoryid || '';
  const filter = !!categoryid ? `&categoryid=${categoryid}` : '';
  const paramFilter = !!categoryid ? `categoryid=eq.${categoryid}` : '';
  const paramSort = 'order=id.desc';
  const paramOffset = `offset=${(page - 1) * size}`;
  const paramLimit = `limit=${size}`;

  await todoStore.getPage(paramSort, paramOffset, paramLimit, paramFilter);


  pageInfo.totalPage = Math.ceil(todoStore.total / size);
  pageInfo.currentPage = page;

  const startpage = Math.floor((page - 1) / 10) * 10 + 1;


  pageInfo.prevButton.status = page > 10;
  pageInfo.prevButton.href = page > 10 ? `?page=${startpage - 1}${filter}` : "#";
  pageInfo.nextButton.status = page < (pageInfo.totalPage - 9);
  pageInfo.nextButton.href = page < (pageInfo.totalPage - 9) ? `?page=${startpage + 10}${filter}` : "#";
  console.log(pageInfo.nextButton.href);

  pageInfo.pageButtons = Array(10)
    .fill({ num: 1, status: "disable", href: "#" })
    .map((_, i) => ({
      num: startpage + i,
      status:
        (i + startpage) == page
          ? 'self'
          : (i + startpage) <= pageInfo.totalPage
            ? 'active'
            : 'disable',
      link:
        (i + startpage) == page
          ? '#'
          : (i + startpage) <= pageInfo.totalPage
            ? `?page=${i + startpage}${filter}`
            : '#'
    }));
}

onBeforeMount(async () => {
  await getTodo();
})
</script>

<style></style>