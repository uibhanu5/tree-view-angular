import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  listChildChanged = [];
  arr = [
    {
      id: "group_1",
      name: "Group 1",
      items: [
        {
          id: "group_1.abc",
          name: "Parent1",
          // checked: false,
          expand: false,
          childs: [
            {
              id: "group_1.abc.action_See_List",
              name: "See List",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_See_List_List1',
                  name: 'List1',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_See_List_List2',
                  name: 'List2',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },

              ]
            },
            {
              id: "group_1.abc.action_Edit",
              name: "Edit",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Edit_List1',
                  name: 'List1',
                  //      checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //        checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //        checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Edit_List2',
                  name: 'List2',
                  //     checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
              ]

            },
            {
              id: "group_1.abc.action_Delete",
              name: "Delete",
              // checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Delete_List1',
                  name: 'List1',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Delete_List2',
                  name: 'List2',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      //expand: true,
                    }
                  ]
                },
              ]
            },
            {
              id: "group_1.abc.action_Print",
              name: "Print",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Print_List1',
                  name: 'List1',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Print_List2',
                  name: 'List2',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    }
                  ]
                },
              ]
            },
          ],
        }
      ],
    },
  ];

  // checkMinusSquare(item) {
  //   const count = item.childs.filter(x => x.checked == true).length;
  //   if (count > 0 && count < item.childs.length) {
  //     return true;
  //   } else if (count == 0) {
  //     return false;
  //   }
  // }

  // checkParent(group_i, i) {
  //   this.arr[group_i].items[i].checked = !this.arr[group_i].items[i].checked;
  //   if (this.arr[group_i].items[i].checked) {
  //     this.arr[group_i].items[i].childs.map((x) => (x.checked = true));
  //   } else {
  //     this.arr[group_i].items[i].childs.map((x) => (x.checked = false));
  //   }
  //   this.arr[group_i].items[i].childs.forEach((x) => {
  //     if (this.listChildChanged.findIndex((el) => el.id == x.id) == -1) {
  //       this.listChildChanged.push(x);
  //     }
  //   });
  // }

  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].expand =
      !this.arr[group_i].items[parent_i].childs[i].expand;
    // const count = this.arr[group_i].items[parent_i].childs.filter(
    //   (el) => el.expand == true
    // ).length;
    // if (count == this.arr[group_i].items[parent_i].childs.length) {
    //   this.arr[group_i].items[parent_i].expand = true;
    // } else {
    //   this.arr[group_i].items[parent_i].expand = false;
    // }
    // if (
    //   this.listChildChanged.findIndex(
    //     (el) => el.id == this.arr[group_i].items[parent_i].childs[i].id
    //   ) == -1
    // ) {
    //   this.listChildChanged.push(this.arr[group_i].items[parent_i].childs[i]);
    // }
  }

  checkSubChild(group_i, parent_i, child_i, i) {
    this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand =
      !this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand;
    // const count = this.arr[group_i].items[parent_i].childs[child_i].subChilds.filter(
    //   (el) => el.expand == true
    // ).length;
    // if (count == this.arr[group_i].items[parent_i].childs[child_i].subChilds.length) {
    //   this.arr[group_i].items[parent_i].childs[child_i].expand = true;
    // } else {
    //   this.arr[group_i].items[parent_i].childs[child_i].expand = false;
    // }

  }

  // getListChildChanged() {
  //   console.log(this.listChildChanged);
  // }
}
