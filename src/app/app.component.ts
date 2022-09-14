import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  arr = [
    {
      id: "group_1",
      name: "Group 1",
      items: [
        {
          id: "group_1.abc",
          name: "Tenet HealthCare Corporation",
          total: 10183736,
          expand: false,
          childs: [
            {
              id: "group_1.abc.action_See_List",
              name: "UN2N2",
              total: 1263673,
              description: "FIAM ITM INF-PR BD D $585112 F FPRS",
              expand: false,
              subChilds: [
                {
                  id: "group_1.abc.action_See_List_List1",
                  name: "UN2N3",
                  total: 1263673,
                  description: "FIAM ITM INF-PR BD D $585112",
                  expand: false,
                  sub_Childs: [
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                  ],
                },
                {
                  id: "group_1.abc.action_See_List_List2",
                  name: "UN2N3",
                  total: 1263673,
                  description: "FIAM ITM INF-PR BD D $585112",
                  expand: false,
                  sub_Childs: [
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                  ],
                },
              ],
            },
            {
              id: "group_1.abc.action_See_List",
              name: "UN2N3",
              total: 1263673,
              description: "FIAM ITM INF-PR BD D $585112 F FPRS",
              expand: false,
              subChilds: [
                {
                  id: "group_1.abc.action_See_List_List1",
                  name: "UN2N633",
                  total: 12638673,
                  description: "FIAM ITM INF-PR BD D $585112",
                  expand: false,
                  sub_Childs: [
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N837",
                      total: 873629,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                  ],
                },
                {
                  id: "group_1.abc.action_See_List_List2",
                  name: "UN2N3",
                  total: 1263673,
                  description: "FIAM ITM INF-PR BD D $585112",
                  expand: false,
                  sub_Childs: [
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "UN2N3",
                      total: 1263673,
                      description: "FIAM ITM INF-PR BD D $585112",
                      expand: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].expand =
      !this.arr[group_i].items[parent_i].childs[i].expand;
  }

  checkSubChild(group_i, parent_i, child_i, i) {
    this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand =
      !this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand;
  }
}
