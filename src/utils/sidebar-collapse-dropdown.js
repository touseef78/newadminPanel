import $ from "jquery";

export default {
    sidebarCollapseDropdown() {
        // Collapsed Menu Dropdown
        let position = "left";
        let sidebarWidth;

        if ($("html").attr("dir") === "rtl") {
            position = "right";
        }

        $(".hp-sidebar-container li a").mouseenter(function () {
            if ($("body").hasClass("collapsed-active")) {
                sidebarWidth = parseInt($(this).parents(".hp-sidebar").width());

                $(".hp-sidebar-dropdown-container").remove();

                if ($(this).next(".collapse").find(".submenu-children").length) {
                    $("body").append(
                        `
                 <div class="hp-sidebar-dropdown-container position-absolute">
                     <ul>` +
                        $(this).next(".collapse").find(".submenu-children").html() +
                        `</ul>
                 </div>
             `
                    );

                    if (
                        $(this).offset().top +
                        $(".hp-sidebar-dropdown-container").height() >
                        $(window).height()
                    ) {
                        $(".hp-sidebar-dropdown-container > ul").css({
                            maxHeight:
                                "calc(100vh - " +
                                ($(window).height() - $(this).offset().top) +
                                "px)",
                        });

                        $(".hp-sidebar-dropdown-container").css(
                            "top",
                            $(this).offset().top -
                            $(".hp-sidebar-dropdown-container").height() +
                            50 +
                            "px"
                        );
                        if (position === "right") {
                            $(".hp-sidebar-dropdown-container").css(
                                position,
                                sidebarWidth + "px"
                            );
                        } else {
                            $(".hp-sidebar-dropdown-container").css(
                                position,
                                "calc(" + $(this).offset().left + "px + " + sidebarWidth + "px)"
                            );
                        }
                    } else {
                        $(".hp-sidebar-dropdown-container > ul").css({
                            maxHeight: "none",
                        });

                        $(".hp-sidebar-dropdown-container").css(
                            "top",
                            $(this).offset().top + "px"
                        );
                        if (position === "right") {
                            $(".hp-sidebar-dropdown-container").css(
                                position,
                                sidebarWidth + "px"
                            );
                        } else {
                            $(".hp-sidebar-dropdown-container").css(
                                position,
                                "calc(" + $(this).offset().left + "px + " + sidebarWidth + "px)"
                            );
                        }
                    }

                    //--

                    let levelNumber;
                    $(".hp-sidebar-dropdown-container li a").mouseenter(function () {
                        if ($(this).next(".collapse").find(".submenu-children").length) {
                            $(this).css("pointer-events", "none");

                            levelNumber = $(this)
                                .next(".collapse")
                                .find(".submenu-children")
                                .data("level");

                            $("body").append(
                                `
                         <div class="hp-sidebar-dropdown-container position-absolute" data-level="` +
                                levelNumber +
                                `">
                             <ul>` +
                                $(this).next(".collapse").find(".submenu-children").html() +
                                `</ul>
                         </div>
                     `
                            );

                            if (
                                $(this).offset().top +
                                $(
                                    ".hp-sidebar-dropdown-container[data-level=" +
                                    levelNumber +
                                    "]"
                                ).height() >
                                $(window).height()
                            ) {
                                $(
                                    ".hp-sidebar-dropdown-container[data-level=" +
                                    levelNumber +
                                    "] > ul"
                                ).css({
                                    maxHeight:
                                        "calc(100vh - " +
                                        ($(window).height() - $(this).offset().top) +
                                        "px)",
                                });

                                $(
                                    ".hp-sidebar-dropdown-container[data-level=" +
                                    levelNumber +
                                    "]"
                                ).css(
                                    "top",
                                    $(this).offset().top -
                                    $(
                                        ".hp-sidebar-dropdown-container[data-level=" +
                                        levelNumber +
                                        "]"
                                    ).height() +
                                    50 +
                                    "px"
                                );

                                if (position === "right") {
                                    $(
                                        ".hp-sidebar-dropdown-container[data-level=" +
                                        levelNumber +
                                        "]"
                                    ).css(
                                        position,
                                        "calc(" + ($(this).width() + sidebarWidth + 27) + "px)"
                                    );
                                } else {
                                    $(
                                        ".hp-sidebar-dropdown-container[data-level=" +
                                        levelNumber +
                                        "]"
                                    ).css(
                                        position,
                                        "calc(" +
                                        $(this).offset().left +
                                        "px + " +
                                        sidebarWidth * parseInt(levelNumber) +
                                        "px - 8px)"
                                    );
                                }
                            } else {
                                $(
                                    ".hp-sidebar-dropdown-container[data-level=" +
                                    levelNumber +
                                    "] > ul"
                                ).css({
                                    maxHeight: "none",
                                });

                                $(
                                    ".hp-sidebar-dropdown-container[data-level=" +
                                    levelNumber +
                                    "]"
                                ).css("top", $(this).offset().top + "px");
                                if (position === "right") {
                                    $(
                                        ".hp-sidebar-dropdown-container[data-level=" +
                                        levelNumber +
                                        "]"
                                    ).css(
                                        position,
                                        "calc(" + ($(this).width() + sidebarWidth + 27) + "px)"
                                    );
                                } else {
                                    $(
                                        ".hp-sidebar-dropdown-container[data-level=" +
                                        levelNumber +
                                        "]"
                                    ).css(
                                        position,
                                        "calc(" +
                                        $(this).offset().left +
                                        "px + " +
                                        sidebarWidth * parseInt(levelNumber) +
                                        "px - 8px)"
                                    );
                                }
                            }
                        } else {
                            $(".hp-sidebar-dropdown-container li a").css(
                                "pointer-events",
                                "all"
                            );
                            $(
                                ".hp-sidebar-dropdown-container[data-level=" + levelNumber + "]"
                            ).remove();
                        }
                    });
                }
            } else {
                $(".hp-sidebar-dropdown-container").remove();
            }
        });

        $(window).mousemove(function (e) {
            let menuItem = $(".hp-sidebar-container li a");
            let dropdownContainer = $(".hp-sidebar-dropdown-container");

            if (
                !menuItem.is(event.target) &&
                !menuItem.has(event.target).length &&
                !dropdownContainer.is(event.target) &&
                !dropdownContainer.has(event.target).length
            ) {
                $(".hp-sidebar-dropdown-container").remove();
                $(".hp-sidebar-dropdown-container li a").css("pointer-events", "all");
            }
        });
    }
}